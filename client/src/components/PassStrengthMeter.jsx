import { 
  Check, 
  X
} from "lucide-react";

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "At least 12 characters", met: password.length >= 12 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains special characters", met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="mt-2 space-y-1">
      { criteria.map((item) => (
        <div key={ item.label } className="flex items-center text-xs">
          { item.met ? (
            <Check size-4 className="text-green-500 mr-2" />
          ) : (
            <X size-4 className="text-gray-500 mr-2" />
          ) }
          <span className={ item.met ? "text-green-500" : "text-gray-400" }>
            { item.label }
          </span>
        </div>
      )) }
    </div>
  );
};

const PassStrengthMeter = ({ password }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 12) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };
  const strength = getStrength(password);

  const getColor = (strength) => {
    if (strength === 0) return "bg-red-500";
    if (strength === 1) return "bg-yellow-500";
    if (strength === 2) return "bg-yellow-400";
    if (strength === 3) return "bg-green-500";
    if (strength === 4) return "bg-green-400";
    return "bg-green-500";  // default color for strength 4 or more
  }

  const getStrengthText = (strength) => {
    if (strength === 0) return "Very Weak";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Moderate";
    if (strength === 3) return "Strong";
    if (strength === 4) return "Very Strong";
    return "Very Strong";
  }

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center text-xs mb-1">
        <span className="text-xs text-gray-400">
          Password strength
        </span>
        <span className="text-xs text-gray-400">
          { getStrengthText(strength) }
        </span>
      </div>

      <div className="flex space-x-1">
        { [ ...Array(5) ].map((_, index) => (
          <div
            key={ index }
            className={ `h-1 w-1/4 rounded-full transition-colors duration-300 ${index < strength ? getColor(strength) : "bg-gray-600"}` }
          />
        )) }
      </div>
      <PasswordCriteria password={ password } />
    </div>
  );
};

export default PassStrengthMeter;