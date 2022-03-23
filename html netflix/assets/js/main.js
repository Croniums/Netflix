function mouseOver() {

    document.getElementById("mainvideo").play()
    document.getElementById("mainvideo").style.opacity="100"
}

function mouseOut() {
    document.getElementById("mainvideo").pause()
    document.getElementById("mainvideo").style.opacity="0"
}

var scrollposition = 0;

window.addEventListener('scroll', function(e) {
    scrollposition = window.scrollY;
    if (scrollposition > 1) {
        this.document.getElementById("navbarr").style.backgroundColor="black";
    }
    else {
        this.document.getElementById("navbarr").style.backgroundColor="unset";
    }
});

var element = document.getElementById("element");
var element1 = document.getElementById("element1");
var element2 = document.getElementById("element2");
var element3 = document.getElementById("element3");
var element4 = document.getElementById("element4");
var element5 = document.getElementById("element5");
var element6 = document.getElementById("element6");
var element7 = document.getElementById("element7");
var element8 = document.getElementById("element8");
var element9 = document.getElementById("element9");
//flèches
var leftarrow = document.getElementById("leftarrow")
var rightarrow = document.getElementById("rightarrow")
var leftarrow1 = document.getElementById("leftarrow1")
var rightarrow1 = document.getElementById("rightarrow1")
var leftarrow2 = document.getElementById("leftarrow2")
var rightarrow2 = document.getElementById("rightarrow2")
var leftarrow3 = document.getElementById("leftarrow3")
var rightarrow3 = document.getElementById("rightarrow3")
var leftarrow4 = document.getElementById("leftarrow4")
var rightarrow4 = document.getElementById("rightarrow4")
var leftarrow5 = document.getElementById("leftarrow5")
var rightarrow5 = document.getElementById("rightarrow5")
var leftarrow6 = document.getElementById("leftarrow6")
var rightarrow6 = document.getElementById("rightarrow6")
var leftarrow7 = document.getElementById("leftarrow7")
var rightarrow7 = document.getElementById("rightarrow7")
var leftarrow8 = document.getElementById("leftarrow8")
var rightarrow8 = document.getElementById("rightarrow8")
var leftarrow9 = document.getElementById("leftarrow9")
var rightarrow9 = document.getElementById("rightarrow9")



rightarrow.addEventListener("click", scrollright);
leftarrow.addEventListener("click", scrollleft);
rightarrow1.addEventListener("click", scrollright1);
leftarrow1.addEventListener("click", scrollleft1);
rightarrow2.addEventListener("click", scrollright2);
leftarrow2.addEventListener("click", scrollleft2);
rightarrow3.addEventListener("click", scrollright3);
leftarrow3.addEventListener("click", scrollleft3);
rightarrow4.addEventListener("click", scrollright4);
leftarrow4.addEventListener("click", scrollleft4);
rightarrow5.addEventListener("click", scrollright5);
leftarrow5.addEventListener("click", scrollleft5);
rightarrow6.addEventListener("click", scrollright6);
leftarrow6.addEventListener("click", scrollleft6);
rightarrow7.addEventListener("click", scrollright7);
leftarrow7.addEventListener("click", scrollleft7);
rightarrow8.addEventListener("click", scrollright8);
leftarrow8.addEventListener("click", scrollleft8);
rightarrow9.addEventListener("click", scrollright9);
leftarrow9.addEventListener("click", scrollleft9);



function scrollleft() {
    element.scrollLeft -= 300;
}
function scrollright() {
    element.scrollLeft += 300;
}

function scrollleft1() {
    element1.scrollLeft -= 300;
}
function scrollright1() {
    element1.scrollLeft += 300;
}

function scrollleft2() {
    element2.scrollLeft -= 300;
}
function scrollright2() {
    element2.scrollLeft += 300;
}
function scrollleft3() {
    element3.scrollLeft -= 300;
}
function scrollright3() {
    element3.scrollLeft += 300;
}
function scrollleft4() {
    element4.scrollLeft -= 300;
}
function scrollright4() {
    element4.scrollLeft += 300;
}
function scrollleft5() {
    element5.scrollLeft -= 300;
}
function scrollright5() {
    element5.scrollLeft += 300;
}
function scrollleft6() {
    element6.scrollLeft -= 300;
}
function scrollright6() {
    element6.scrollLeft += 300;
}
function scrollleft7() {
    element7.scrollLeft -= 300;
}
function scrollright7() {
    element7.scrollLeft += 300;
}
function scrollleft8() {
    element8.scrollLeft -= 300;
}
function scrollright8() {
    element8.scrollLeft += 300;
}
function scrollleft9() {
    element9.scrollLeft -= 300;
}
function scrollright9() {
    element9.scrollLeft += 300;
}

var images1 = [
    '<img src="assets/img/newrelease/AAAABfbbZI0wSkTO9ds9ajyunL1Re2bzorEARdL5kBwvyFRVUk66rIbcQ6QZ2fIQcE9cWCLlJ6r7tcy4T9jqtcHN0WsHxtF-7usMbMFYtwfIoM3PXITYuNiOYtBsvtUN.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/newrelease/AAAABY67dlhZCaY-UmKRDoSrXKY6G7ftLNGtlg6HHFwxs1RjDceDDNYiBfzVP9iaEyASoIhxPr7pgCLmYoynSSXDDe8gZ_kQFKAoszHp5BGo5_rC7yAtR2DwVZeviGr8.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/newrelease/adamproject.jpg" class=" rounded cursor-pointer h-56 max-w-md">',
    '<img src="assets/img/newrelease/image.jpg" class="rounded cursor-pointer h-56 max-w-md">',
    '<img src="assets/img/newrelease/images.jpg" class="rounded cursor-pointer h-56 max-w-md">',
    '<img src="assets/img/newrelease/walkingdead.jpg" class="rounded cursor-pointer h-56 max-w-md">',
    '<img src="assets/img/newrelease/auservicedupassee.jpg" class="rounded cursor-pointer h-56 max-w-md">',
    '<img src="assets/img/newrelease/barbares.jpg" class="rounded cursor-pointer h-56 max-w-md">',
    '<img src="assets/img/newrelease/Serie-daction-en-direct-Netflix-One-Piece-tout-ce-que.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/newrelease/maxresdefault-1-1024x576.jpg" class="rounded cursor-pointer h-56 max-w-md ">'
];
var images2 = [
    '<img src="assets/img/tvshows/AAAABdhLbOEelEnDueGDf0qutArNphc0gMvLhXgZ9PXd2PDLyoGj-9DEK1m7RrODABEzXxCDswcd72ViUewRJdXIhvn7B3y2gw75BQig3p3kdmC9tBzbD_sgjTXQdvHu.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvshows/AAAABfXyhWtNB5WAOfNawqCxh0tNCSkzT_YowS06Vjlam7nhhUu8Pki4CVUJS0laz9-Dx5YjSAlD-Tx1uPQD1VxDrPnTqUStn4NxwX0grQdNKjNRbyd2l2o8wvJira7f.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvshows/aad.jpg" class=" rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvshows/squidgame.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvshows/trial.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvshows/myname.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvshows/mthrkiller.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvshows/therain.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvshows/aunomdelavengence.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvshows/crc.jpg" class="rounded cursor-pointer h-56 max-w-md ">'
];
var images3 = [
    '<img src="assets/img/adventure/AAAABa0UHOnFqDrWaxC5RdL-7njnsSwfnRfPzymMa7aC5petIurA2d7NM11okjlfMsb76g7zto2eGW5oYZnCliYLgjoE1Yo.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/adventure/AAAABaRtU_hnuyoEqIaayU4DaVV2B7lTuTZI3joH1mff9Yn5aaQ8OI66oopJ-q3g0VLBJfNamNQyxmS_fZut00lsQ89x3dXEFUkFOYbeSH-pIGB3EJgoni7oNNk5s6Wf.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/adventure/AAAABQKR9rXi2zFA8H3aD1xeCM_o3ineYNDMo6sFEANjz5erq6b2rUs9q2G77YYRqZHH20LUY95dzHpWETjtyL43ZKynzP86jT5TCtwNgLA2LdIYvWmabPKMObcz2Gpn.jpg" class=" rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/adventure/adam.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/adventure/extraction.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/adventure/outerbank.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/adventure/cobrakai.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/adventure/shanra.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/adventure/altered.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/adventure/space.jpg" class="rounded cursor-pointer h-56 max-w-md ">'


];
var images4 = [
    '<img src="assets/img/tvcomedy/AAAABam9cZaW0R70X_hBUqhRZy4XwQboHUBT386UjLZ7ir2ZFg52YQAYw_d6a31DKbRK2B23Cfov-hLVXGE4K9umPHTv_I8.jpg" class="rounded cursor-pointer h-56 max-w-md "></img>',
    '<img src="assets/img/tvcomedy/AAAABRtxvyXI2iijj2FY9eL1pxxyKPTPwJOtKJvPtR6sro_BQNV3qzB7Rk1b4HHDe4hil4ZfA9o3p5F2XCLsWeZ1PG69B3Ji2jqEDPrvBb4ErZkTJ3QoOEljzFosqQ3p.jpg" class="rounded cursor-pointer h-56 max-w-md "></img>',
    '<img src="assets/img/tvcomedy/AAAABS8A_wx_-8PwzJOS7Ww3cABKAkJBahVoFxVO1nXzQrTEpedLGLm0x0bQ0FiVDAv5bF3Cmp5hV2qRFK0F4xfrkBXVOEQV7qDeDI0c0Com7TqwaFRa9hs97ND-yYz6.jpg" class=" rounded cursor-pointer h-56 max-w-md "></img>',
    '<img src="assets/img/tvcomedy/AAAABTZUGL51FrOoPwgspvN0Fk_e2t9NwdrV6qRKuu-YL8fl8i5wE0xOD35tsVn3EmlHvSom6swJyTahgWu2tk_9N6pJenpscZXRtSND4XMuqf41fGANFRK8FpHDhb14.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvcomedy/oneday.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvcomedy/mamillia.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvcomedy/ethos_netflix-1024x576.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvcomedy/thinybeauty.jpg" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvcomedy/attypical.png" class="rounded cursor-pointer h-56 max-w-md ">',
    '<img src="assets/img/tvcomedy/feelgood.jpg" class="rounded cursor-pointer h-56 max-w-md ">'
];
var images5 = [
    "<img src='assets/img/anime/tokyoghoul.png' class='rounded cursor-pointer h-56 max-w-md'></img>",
    "<img src='assets/img/anime/ScissorSeven-Banniere-800x445.jpg' class='rounded cursor-pointer h-56 max-w-md'></img>",
    "<img src='assets/img/anime/bleach.jpg' class='rounded cursor-pointer h-56 max-w-md'></img>",
    "<img src='assets/img/anime/CASTLEVANIA-saison-4.jpg' class='rounded cursor-pointer h-56 max-w-md'></img>",
    "<img src='assets/img/anime/castlevania-belmont.jpg' class='rounded cursor-pointer h-56 max-w-md'></img>",
    "<img src='assets/img/anime/saki.jpg' class='rounded cursor-pointer h-56 max-w-md'></img>",
    "<img src='assets/img/anime/naruto.jpg' class='rounded cursor-pointer h-56 max-w-md'></img>",
    "<img src='assets/img/anime/gambling.jpg' class=' rounded cursor-pointer h-56 max-w-md'></img>",
    "<img src='assets/img/anime/BluePeriod-Banniere-800x445.png' class='rounded cursor-pointer h-56 max-w-md'></img>",
    "<img src='assets/img/anime/beastar.jpg' class='rounded cursor-pointer h-56 max-w-md'></img>"
];

var randomimg1;
var randomimg2;
var randomimg3;
var randomimg4;
var randomimg5;

function generateimg1() {
randomimg1 = images1[~~(Math.random() * (images1.length))];

    return randomimg1;
};
function generateimg2() {
randomimg2 = images2[~~(Math.random() * (images2.length))];

    return randomimg2;
};
function generateimg3() {
randomimg3 = images3[~~(Math.random() * (images3.length))];

    return randomimg3;
};
function generateimg4() {
randomimg4 = images4[~~(Math.random() * (images4.length))];

    return randomimg4;
};
function generateimg5() {
randomimg5 = images5[~~(Math.random() * (images5.length))];

    return randomimg5;
};

function verifyrandomimg1() {
    return generateimg1()
};
function verifyrandomimg2() {
    return generateimg2()
};
function verifyrandomimg3() {
    return generateimg3()
};
function verifyrandomimg4() {
    return generateimg4()
};
function verifyrandomimg5() {
    return generateimg5()
};

function createimgs() {
    document.getElementById("random1").innerHTML = verifyrandomimg1();
    document.getElementById("random2").innerHTML = verifyrandomimg1();
    document.getElementById("random3").innerHTML = verifyrandomimg1();
    document.getElementById("random4").innerHTML = verifyrandomimg1();
    document.getElementById("random5").innerHTML = verifyrandomimg1();
    document.getElementById("random6").innerHTML = verifyrandomimg1();
    document.getElementById("random7").innerHTML = verifyrandomimg1();
    document.getElementById("random8").innerHTML = verifyrandomimg1();
    document.getElementById("random9").innerHTML = verifyrandomimg1();
    document.getElementById("random10").innerHTML = verifyrandomimg1();
    document.getElementById("random11").innerHTML = verifyrandomimg2();
    document.getElementById("random12").innerHTML = verifyrandomimg2();
    document.getElementById("random13").innerHTML = verifyrandomimg2();
    document.getElementById("random14").innerHTML = verifyrandomimg2();
    document.getElementById("random15").innerHTML = verifyrandomimg2();
    document.getElementById("random16").innerHTML = verifyrandomimg2();
    document.getElementById("random17").innerHTML = verifyrandomimg2();
    document.getElementById("random18").innerHTML = verifyrandomimg2();
    document.getElementById("random19").innerHTML = verifyrandomimg2();
    document.getElementById("random20").innerHTML = verifyrandomimg2();
    document.getElementById("random21").innerHTML = verifyrandomimg3();
    document.getElementById("random22").innerHTML = verifyrandomimg3();
    document.getElementById("random23").innerHTML = verifyrandomimg3();
    document.getElementById("random24").innerHTML = verifyrandomimg3();
    document.getElementById("random25").innerHTML = verifyrandomimg3();
    document.getElementById("random26").innerHTML = verifyrandomimg3();
    document.getElementById("random27").innerHTML = verifyrandomimg3();
    document.getElementById("random28").innerHTML = verifyrandomimg3();
    document.getElementById("random29").innerHTML = verifyrandomimg3();
    document.getElementById("random30").innerHTML = verifyrandomimg3();
    document.getElementById("random31").innerHTML = verifyrandomimg4();
    document.getElementById("random32").innerHTML = verifyrandomimg4();
    document.getElementById("random33").innerHTML = verifyrandomimg4();
    document.getElementById("random34").innerHTML = verifyrandomimg4();
    document.getElementById("random35").innerHTML = verifyrandomimg4();
    document.getElementById("random36").innerHTML = verifyrandomimg4();
    document.getElementById("random37").innerHTML = verifyrandomimg4();
    document.getElementById("random38").innerHTML = verifyrandomimg4();
    document.getElementById("random39").innerHTML = verifyrandomimg4();
    document.getElementById("random40").innerHTML = verifyrandomimg4();
    document.getElementById("random41").innerHTML = verifyrandomimg5();
    document.getElementById("random42").innerHTML = verifyrandomimg5();
    document.getElementById("random43").innerHTML = verifyrandomimg5();
    document.getElementById("random44").innerHTML = verifyrandomimg5();
    document.getElementById("random45").innerHTML = verifyrandomimg5();
    document.getElementById("random46").innerHTML = verifyrandomimg5();
    document.getElementById("random47").innerHTML = verifyrandomimg5();
    document.getElementById("random48").innerHTML = verifyrandomimg5();
    document.getElementById("random49").innerHTML = verifyrandomimg5();
    document.getElementById("random50").innerHTML = verifyrandomimg5();
};



    