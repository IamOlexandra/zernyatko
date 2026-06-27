import { IoSunnyOutline, IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineCoffee } from "react-icons/md";
export default function WhyChooseZernyatko() {
    return (
        <div>
            <h2>Чому варто обрати Зернятко?</h2>
            <ul>
                <li>
                    <IoSunnyOutline/>
                    <h3>Смак і якість</h3>
                    <p>Лише відібрані кавові зерна та товари від перевірених виробників.</p>
                </li>
                <li>
                    <MdOutlineCoffee/>
                    <h3>Усе для кавового ритуалу</h3>
                    <p>Від турки до кавомолки — ми зібрали повний набір для ідеальної чашки.</p>
                </li>
                <li>
                    <IoCalendarClearOutline/>
                    <h3>Натхнення щодня</h3>
                    <p>Кава, яка підкреслить твій настрій та стане головною частиною ранкової звички.</p>
                </li>
            </ul>
        </div>
    )
}