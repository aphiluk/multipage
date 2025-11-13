import Counter from "../assets/components/Counter";
import Adder from "../assets/components/Adder";
import Timer from "../assets/components/Timer";
import Temperatures from "../assets/components/Temperatures";
import "../App.css";

export default function Components() {
  return (
    <div className="components-page">
      <div className="components-grid">
        <div className="component-box"><Counter /></div>
        <div className="component-box"><Adder /></div>
        <div className="component-box"><Timer /></div>
        <div className="component-box"><Temperatures /></div>
      </div>

      <p className="student-name">นายอภิรักษ์ ภูมิเพ็ง 67164038</p>
    </div>
  );
}
