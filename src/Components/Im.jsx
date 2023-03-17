import React from "react";
import Photo from "../Components/Photo/my.jpg";
import Photo1 from "../Components/Photo/muSelf.jpg";

const Im = () => {
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <div className=" d-flex align-items-start mt-5">
        <div>
          <img
            src={Photo1}
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "30px",
              border: "2px solid gold",
            }}
          />
        </div>
        <div style={{ marginLeft: "50px", color: "white" }}>
          <h3>Кулжанов Адилхан</h3>
          <h5>Обо мне:</h5>
          <p>Гражданство: Кыргыз </p>
          <p>Место проживание: г.Бишкек</p>
          <p>Образование: Высшее</p>
          <p>Дата рождения: 31 июля 2000 (23 лет)</p>
          <p>Пол: Мужской</p>
          <p>Семейное положение: Холост</p>
          <p>Языки: Кыргызский, Русский</p>
          <p>Водительское удостоверени: B, C категории</p>

          <p>Вредных привычек нету</p>
          <p>Не пью, Не курю Всегда на Позитиве!</p>
        </div>
      </div>

      <div className=" d-flex  align-items-end mt-5">
        <div style={{ marginRight: "50px", color: "white" }}>
          <h5>Опыт работы:</h5>
          <p>Электро монтажником 4 месяца (Cambridge SAPAT)</p>
          <p>Администратором SonyPlaystation клуба (Sonyk)</p>
          <p>Администратором Бильярдного клуба (Azem)</p>
          <p>Jorgo, Yandex Taxi</p>
          <h5>Агентство по Гидрометеорологии при МЧС </h5>
          <p>Инженером I категории отдела государственного сети (1 год)</p>
          <h5>ЗАО "Кока-Кола Бишкек Боттлерс"</h5>
          <p>Грузчик (4 месяца)</p>
          <p>Водитель Автопогрузчик (1 год 3 месяца)</p>
        </div>{" "}
        <img
          src={Photo}
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "30px",
            border: "2px solid gold",
          }}
        />
      </div>
    </div>
  );
};

export default Im;
