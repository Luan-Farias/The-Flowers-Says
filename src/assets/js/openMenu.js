export default function OpenMenu() {
    document.getElementById("menu-area").style.width === "0px"
        ? (document.getElementById("menu-area").style.width = "200px")
        : (document.getElementById("menu-area").style.width = "0px");
}
