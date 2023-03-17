import React from "react";

const Education = () => {
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <div style={{ color: "white" }}>
        <h5>🖊 Об учебе:</h5>

        <h6>🏫 СОЩ №88 до 9-класса с 2006-2015 г.</h6>
        <hr />
        <h6>ПЛ №20 с 2015-2018 г.</h6>
        <p>Среднее специальность: Электро-монтажник, Электро-сварщик</p>
        <hr />
        <h6>КНАУ им.К.И.Скрябина с 2018-2023 г.</h6>
        <p>Высшее образование: Аграрный менеджмент</p>
        <hr />

        <p>В данный момент учусь в Makers на Front-end разработчика</p>
      </div>
    </div>
  );
};

export default Education;
