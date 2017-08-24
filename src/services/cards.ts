export class Cards {

    private Player: number;
    private ImgURL: string;

    constructor(player: number, imgURL: string) {
        this.Player = player;
        this.ImgURL = imgURL;
    }

    get player(): number {
        return this.Player;
    }
    get imgURL(): string {
        return this.ImgURL;
    }
    set player(player: number) {
        this.Player = player;
    }
    set imgURL(ImgURL: string) {
        this.ImgURL = ImgURL;
    }
}
