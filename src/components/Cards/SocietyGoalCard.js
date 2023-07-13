import "./css/SocietyGoalCard.css";

const SocietyGoalCard = ({img, alt, title, subtitle}) => {
  return (
    <div className="goals-card">
      <div className="goals-image">
        <img src={img} alt={alt}/>
      </div>
      <div className="goals-name">{title}</div>
      <div className="goals-roll">{subtitle}</div>
    </div>
  );
}

export default SocietyGoalCard;
