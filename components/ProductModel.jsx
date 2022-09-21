import { useState } from "react";
import styles from "../styles/ProductModel.module.css";

function ProductModel({ createPizza, openModel }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [smPrice, setSmPrice] = useState(0);
  const [mdPrice, setMdPrice] = useState(0);
  const [lgPrice, setLgPrice] = useState(0);
  const [extras, setExtras] = useState([]);
  const [extraText, setExtraText] = useState("");
  const [extraPrice, setExtraPrice] = useState("");
  //   const [errorMsg, setErrorMsg] = useState("");

  const handleAddExtra = () => {
    if (extraText.length && extraPrice > 0) {
      setExtras([...extras, { text: extraText, price: extraPrice }]);
      setExtraText("");
      setExtraPrice("");
    }
  };

  const handleDeletOption = (text) => {
    setExtras([...extras.filter((item) => item.text !== text)]);
    console.log(extras);
  };

  const handleCreatePizza = () => {
    createPizza({
      title,
      description,
      prices: [smPrice, mdPrice, lgPrice],
      img: "img/pizza.png",
      extraOptions: extras,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>create new pizza</h3>

        <span className={styles.closeModel} onClick={() => openModel(false)}>
          &#10005;
        </span>

        <div className={styles.item}>
          <label htmlFor="title">Name</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="mohamed magdy"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor="address">description</label>
          <textarea
            cols={30}
            rows={4}
            type="text"
            id="address"
            name="address"
            placeholder="123 street"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor="title">image</label>
          <input
            type="file"
            id="title"
            name="title"
            placeholder="mohamed magdy"
            // onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        <div className={styles.prices}>
          <label htmlFor="prices">Prices</label>
          <input
            type="number"
            id="sm"
            name="sm"
            placeholder="sm"
            onChange={(e) => setSmPrice(+e.target.value)}
          />
          <input
            type="number"
            id="md"
            name="md"
            placeholder="md"
            onChange={(e) => setMdPrice(+e.target.value)}
          />
          <input
            type="number"
            id="lg"
            name="lg"
            placeholder="lg"
            onChange={(e) => setLgPrice(+e.target.value)}
          />
        </div>

        <div className={styles.extra}>
          <label>Extra options</label>

          <span className={styles.extraAdd} onClick={handleAddExtra}>
            +
          </span>
          <div className={styles.option}>
            <input
              type="text"
              id="extraText"
              name="extraText"
              value={extraText}
              placeholder="ex: spicy sauce"
              onChange={(e) => setExtraText(e.target.value)}
            />

            <input
              type="number"
              id="extraPrice"
              name="extraPrice"
              value={extraPrice}
              placeholder="price"
              onChange={(e) => setExtraPrice(+e.target.value)}
            />
          </div>
          <div>
            {extras.length > 0 &&
              extras.map((opt, index) => (
                <p className={styles.choosen} key={index}>
                  <span onClick={() => handleDeletOption(opt.text)}>
                    &#10005;
                  </span>
                  {`(${opt.price}) ${opt.text}`}
                </p>
              ))}
          </div>
        </div>

        <button className="btn btn-green" onClick={handleCreatePizza}>
          save
        </button>

        {errorMsg.length !== 0 && (
          <span className={styles.msg}>{errorMsg}</span>
        )}
      </div>
    </div>
  );
}

export default ProductModel;
