interface ToggleButtonProps {
    title?: string;
    isToggle: boolean;
    onToggleChange: (isToggle: boolean) => void;
  }
  
  const ToggleButton = (props: ToggleButtonProps): JSX.Element => {
    return (
      <div className="toggle-button-wrapper">
        <span className="toggle-button-title">{props.title} :</span>
        <label className="toggle-button-switch">
          <input
            type="checkbox"
            className="toggle-button-input"
            checked={props.isToggle}
            onChange={() => props.onToggleChange(!props.isToggle)}
          />
          <span
            className={`toggle-button-slider round ${
              props.isToggle ? "active" : ""
            }`}
          />
        </label>
      </div>
    );
  };
  
  export default ToggleButton;
  
