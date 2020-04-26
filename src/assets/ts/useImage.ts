export default function useImage(n: number): string {
    let Png = "";
    if (window.matchMedia("(min-width:768px)").matches) {
        Png = `url(media/fundo${n}-lg.jpg)`;
    } else if (
        window.matchMedia("(min-width:576px)").matches &&
        window.matchMedia("(max-width:768px)").matches
    ) {
        Png = `url(media/fundo${n}-md.jpg)`;
    } else {
        Png = `url(media/fundo${n}-sm.jpg)`;
    }
    return Png;
}
