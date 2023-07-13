import "./css/SocietyGoalCard.css";

const SocietyGoalCard = ({img, alt, title, subtitle}) => {
  return (
    <div className="goals-card">
      <div className="goals-image">
        <img src={img} alt={alt}/>
      </div>
      <div class="goals-name">{title}</div>
      <div class="goals-roll">{subtitle}</div>
    </div>
  );
}

export default SocietyGoalCard;
