var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    StartNormal: "res/title/start_normal.png",
    StartSelect: "res/title/start_select.png",
    GameoverImage: "res/over/gameover.png",
    TitleNormal: "res/over/title_normal.png",
    TitleSelect: "res/over/title_select.png",
    Background: "res/background.png",
    PrincessRight1: "res/princess/princess_right1.png",
    PrincessRight2: "res/princess/princess_right2.png",
    HeroRight1: "res/hero/hero_right1.png",
    HeroRight2: "res/hero/hero_right2.png",
    HeroLeft1: "res/hero/hero_left1.png",
    HeroLeft2: "res/hero/hero_left2.png",
    EnemyRight1: "res/enemy/Kaijin_3.png",
    EnemyRight2: "res/enemy/Kaijin_4.png",
    EnemyLeft1: "res/enemy/Kaijin_1.png",
    EnemyLeft2: "res/enemy/Kaijin_2.png",
    EnemyDamage: "res/enemy/Kaijin_5.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}