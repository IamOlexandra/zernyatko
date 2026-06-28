import css from "../css/whyChooseZernyatko.module.css"
import { IoSunnyOutline, IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineCoffee } from "react-icons/md";
export default function WhyChooseZernyatko() {
    return (
        <div class="app">
            <h2 className={css.whyChooseZernyatkoTitle}>Чому варто обрати Зернятко?</h2>
            <ul className={css.whyChooseZernyatkoList}>
                <li className={css.whyChooseZernyatkoItem}>
                    <IoSunnyOutline className={css.whyChooseZernyatkoItemSymbol}/>
                    <h3 className={css.whyChooseZernyatkoItemTitle}>Смак і якість</h3>
                    <p className={css.whyChooseZernyatkoItemText}>Лише відібрані кавові зерна та товари від <br /> перевірених виробників.</p>
                </li>
                <li className={css.whyChooseZernyatkoItem}>
                    <MdOutlineCoffee className={css.whyChooseZernyatkoItemSymbol}/>
                    <h3 className={css.whyChooseZernyatkoItemTitle}>Усе для кавового ритуалу</h3>
                    <p className={css.whyChooseZernyatkoItemText}>Від турки до кавомолки — ми зібрали повний набір <br /> для ідеальної чашки.</p>
                </li>
                <li className={css.whyChooseZernyatkoItem}>
                    <IoCalendarClearOutline className={css.whyChooseZernyatkoItemSymbol}/>
                    <h3 className={css.whyChooseZernyatkoItemTitle}>Натхнення щодня</h3>
                    <p className={css.whyChooseZernyatkoItemText}>Кава, яка підкреслить твій настрій та стане <br /> головною частиною ранкової звички.</p>
                </li>
            </ul>
        </div>
    )
}