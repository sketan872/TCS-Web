import './NavBar.css';
export default function NavBar(){
    return(
        <div class="navbar">
            <div class="image-container">
                <img src="/images/t.png"></img>
            </div>
            <nav>
                <a class="current" href="/">Home</a>
                <a href="https://www.instagram.com/__rahul_goyal___/">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=100038954747406">Facebook</a>
                <a href="https://github.com/rahulsenpai">GitHub</a>
                <a href="https://www.instagram.com/__rahul_goyal___/">Photos</a>
                <a href="https://www.instagram.com/__rahul_goyal___/">Regestration</a>
            </nav>
        </div>
    );
}