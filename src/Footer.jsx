import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer>
            <div>
                {/* logo */}
                <div>
                    <a href="./img/zernyatko_logo.svg"></a>
                </div>
                {/* menu */}
                <nav>
                    <h4>Меню</h4>
                    <ul>
                        <li><a href="/">Головна</a></li>
                        <li><a href="/">Товари</a></li>
                        <li><a href="/">Категорії</a></li>
                    </ul>
                </nav>
                {/* Підписка */}
                <div>
                    <h4>Підписатися</h4>
                    <p>Приєднуйтесь до нашої розсилки, щоб бути в курсі новин та акцій.</p>
                    <form>
                        <input type="email" placeholder="Введіть ваш email"/>
                        <button>Підписатися</button>
                    </form>
                </div>
                 {/* ФУТЕР ФУТЕРА  */}
                 <div>
                    <p>© 2025 Зернятко. Всі права захищені.</p>
                    <ul>
                        <li><a href="https://www.facebook.com"><BiLogoFacebookCircle/></a></li>
                        <li><a href="https://www.instagram.com"><BiLogoInstagram/></a></li>
                        <li><a href="https://x.com"><FaXTwitter/></a></li>
                        <li><a href="https://www.youtube.com"><BiLogoYoutube/></a></li>
                    </ul>
                 </div>
            </div>
        </footer>
    )
}