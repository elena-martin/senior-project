jQuery(document).ready(function() {
/*---------- GREAT PLATEAU REGION ----------*/
/* ----------GP TOWER----------*/
  /*View From Map*/
  jQuery('.gp-tower').change(function() {
    if ($(this).prop('checked')) {
        $("#gp-tower-tut").css("visibility", "visible");
    }
    else {
      $("#gp-tower-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#gp-tower-cl').click(function() {
    $("#gp-tower-tut").css("visibility", "visible");
    $(".gp-tower").prop("checked", true);
  });

/* ----------OMAN AU----------*/
  /*View From Map*/
  jQuery('.oman-au').change(function() {
    if ($(this).prop('checked')) {
        $("#oman-au-tut").css("visibility", "visible");
    }
    else {
      $("#oman-au-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#oman-au-cl').click(function() {
    $("#oman-au-tut").css("visibility", "visible");
    $(".oman-au").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.oman-au-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#oman-au-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#oman-au-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#oman-au-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#oman-au-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/* ----------JA BAIJ---------*/
  /*View From Map*/
  jQuery('.ja-baij').change(function() {
    if ($(this).prop('checked')) {
        $("#ja-baij-tut").css("visibility", "visible");
    }
    else {
      $("#ja-baij-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#ja-baij-cl').click(function() {
    $("#ja-baij-tut").css("visibility", "visible");
    $(".ja-baij").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.ja-baij-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#ja-baij-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#ja-baij-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#ja-baij-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#ja-baij-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/* ----------OWA DAIM----------*/
  /*View From Map*/
  jQuery('.owa-daim').change(function() {
    if ($(this).prop('checked')) {
        $("#owa-daim-tut").css("visibility", "visible");
    }
    else {
      $("#owa-daim-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#owa-daim-cl').click(function() {
    $("#owa-daim-tut").css("visibility", "visible");
    $(".owa-daim").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.owa-daim-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#owa-daim-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#owa-daim-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#owa-daim-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#owa-daim-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/* ----------KEH NAMUT---------- */
  /*View From Map*/
  jQuery('.keh-namut').change(function() {
      if ($(this).prop('checked')) {
          $("#keh-namut-tut").css("visibility", "visible");

      }
      else {
        $("#keh-namut-tut").css("visibility", "hidden");
      }
  });
  /*View From List*/
  jQuery('#keh-namut-cl').click(function() {
    $("#keh-namut-tut").css("visibility", "visible");
    $(".keh-namut").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.keh-namut-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#keh-namut-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#keh-namut-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#keh-namut-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#keh-namut-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/*---------- RIDGELAND REGION ----------*/
  
/*----- RIDGELAND TOWER -----*/
  /*View from Map*/
  jQuery('.ridgeland-tower').change(function() {
    if ($(this).prop('checked')) {
        $("#ridgeland-tower-tut").css("visibility", "visible");
    }
    else {
      $("#ridgeland-tower-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#ridgeland-tower-cl').click(function() {
    $("#ridgeland-tower-tut").css("visibility", "visible");
    $(".ridgeland-tower").prop("checked", true);
  });

/* ----------TOH YAHSA----------*/
  /*View From Map*/
  jQuery('.toh-yahsa').change(function() {
    if ($(this).prop('checked')) {
        $("#toh-yahsa-tut").css("visibility", "visible");
    }
    else {
      $("#toh-yahsa-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#toh-yahsa-cl').click(function() {
    $("#toh-yahsa-tut").css("visibility", "visible");
    $(".toh-yahsa").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.toh-yahsa-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#toh-yahsa-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#toh-yahsa-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#toh-yahsa-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#toh-yahsa-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/* ----------ZALTA WA----------*/
  /*View From Map*/
  jQuery('.zalta-wa').change(function() {
    if ($(this).prop('checked')) {
        $("#zalta-wa-tut").css("visibility", "visible");
    }
    else {
      $("#zalta-wa-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#zalta-wa-cl').click(function() {
    $("#zalta-wa-tut").css("visibility", "visible");
    $(".zalta-wa").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.zalta-wa-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#zalta-wa-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#zalta-wa-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#zalta-wa-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#zalta-wa-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/* ----------MAAG NO'RAH----------*/
  /*View From Map*/
  jQuery('.maag-norah').change(function() {
    if ($(this).prop('checked')) {
        $("#maag-norah-tut").css("visibility", "visible");
    }
    else {
      $("#maag-norah-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#maag-norah-cl').click(function() {
    $("#maag-norah-tut").css("visibility", "visible");
    $(".maag-norah").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.maag-norah-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#maag-norah-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#maag-norah-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#maag-norah-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#maag-norah-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/* ----------SHEEM DAGOZE----------*/
  /*View From Map*/
  jQuery('.sheem-dagoze').change(function() {
    if ($(this).prop('checked')) {
        $("#sheem-dagoze-tut").css("visibility", "visible");
    }
    else {
      $("#sheem-dagoze-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#sheem-dagoze-cl').click(function() {
    $("#sheem-dagoze-tut").css("visibility", "visible");
    $(".sheem-dagoze").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.sheem-dagoze-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#sheem-dagoze-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#sheem-dagoze-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#sheem-dagoze-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#sheem-dagoze-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/* ----------SHAE LOYA----------*/
  /*View From Map*/
  jQuery('.shae-loya').change(function() {
    if ($(this).prop('checked')) {
        $("#shae-loya-tut").css("visibility", "visible");
    }
    else {
      $("#shae-loya-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#shae-loya-cl').click(function() {
    $("#shae-loya-tut").css("visibility", "visible");
    $(".shae-loya").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.shae-loya-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#shae-loya-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#shae-loya-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#shae-loya-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#shae-loya-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/* ----------MIJAH ROKEE----------*/
  /*View From Map*/
  jQuery('.mijah-rokee').change(function() {
    if ($(this).prop('checked')) {
        $("#mijah-rokee-tut").css("visibility", "visible");
    }
    else {
      $("#mijah-rokee-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#mijah-rokee-cl').click(function() {
    $("#mijah-rokee-tut").css("visibility", "visible");
    $(".mijah-rokee").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.mijah-rokee-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#mijah-rokee-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#mijah-rokee-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#mijah-rokee-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#mijah-rokee-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/* ----------MOGG LATAN----------*/
  /*View From Map*/
  jQuery('.mogg-latan').change(function() {
    if ($(this).prop('checked')) {
        $("#mogg-latan-tut").css("visibility", "visible");
    }
    else {
      $("#mogg-latan-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#mogg-latan-cl').click(function() {
    $("#mogg-latan-tut").css("visibility", "visible");
    $(".mogg-latan").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.mogg-latan-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#mogg-latan-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#mogg-latan-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#mogg-latan-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#mogg-latan-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/*---------- CENTRAL REGION ----------*/
/* ----------CENTRAL TOWER----------*/
  /*View From Map*/
  jQuery('.central-tower').change(function() {
    if ($(this).prop('checked')) {
        $("#central-tower-tut").css("visibility", "visible");
    }
    else {
      $("#central-tower-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#central-tower-cl').click(function() {
    $("#central-tower-tut").css("visibility", "visible");
    $(".central-tower").prop("checked", true);
  });

  /* ----------DAH KASO----------*/
  /*View From Map*/
  jQuery('.dah-kaso').change(function() {
    if ($(this).prop('checked')) {
        $("#dah-kaso-tut").css("visibility", "visible");
    }
    else {
      $("#dah-kaso-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#dah-kaso-cl').click(function() {
    $("#dah-kaso-tut").css("visibility", "visible");
    $(".dah-kaso").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.dah-kaso-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#dah-kaso-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#dah-kaso-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#dah-kaso-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#dah-kaso-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------ROTA OOH----------*/
  /*View From Map*/
  jQuery('.rota-ooh').change(function() {
    if ($(this).prop('checked')) {
      $("#rota-ooh-tut").css("visibility", "visible");
    }
    else {
      $("#rota-ooh-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#rota-ooh-cl').click(function() {
    $("#rota-ooh-tut").css("visibility", "visible");
    $(".rota-ooh").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.rota-ooh-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#rota-ooh-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#rota-ooh-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#rota-ooh-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#rota-ooh-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------KAAM YA'TAK----------*/
  /*View From Map*/
  jQuery('.kaam-yatak').change(function() {
    if ($(this).prop('checked')) {
        $("#kaam-yatak-tut").css("visibility", "visible");
    }
    else {
      $("#kaam-yatak-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#kaam-yatak-cl').click(function() {
    $("#kaam-yatak-tut").css("visibility", "visible");
    $(".kaam-yatak").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.kaam-yatak-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#kaam-yatak-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#kaam-yatak-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#kaam-yatak-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#kaam-yatak-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------KATAH CHUKI----------*/
  /*View From Map*/
  jQuery('.katah-chuki').change(function() {
    if ($(this).prop('checked')) {
        $("#katah-chuki-tut").css("visibility", "visible");
    }
    else {
      $("#katah-chuki-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#katah-chuki-cl').click(function() {
    $("#katah-chuki-tut").css("visibility", "visible");
    $(".katah-chuki").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.katah-chuki-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#katah-chuki-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#katah-chuki-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#katah-chuki-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#katah-chuki-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------NOYA NEHA----------*/
  /*View From Map*/
  jQuery('.noya-neha').change(function() {
    if ($(this).prop('checked')) {
        $("#noya-neha-tut").css("visibility", "visible");
    }
    else {
      $("#noya-neha-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#noya-neha-cl').click(function() {
    $("#noya-neha-tut").css("visibility", "visible");
    $(".noya-neha").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.noya-neha-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#noya-neha-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#noya-neha-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#noya-neha-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#noya-neha-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------SAAS KO'SAH----------*/
  /*View From Map*/
  jQuery('.saas-kosah').change(function() {
    if ($(this).prop('checked')) {
        $("#saas-kosah-tut").css("visibility", "visible");
    }
    else {
      $("#saas-kosah-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#saas-kosah-cl').click(function() {
    $("#saas-kosah-tut").css("visibility", "visible");
    $(".saas-kosah").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.saas-kosah-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#saas-kosah-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#saas-kosah-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#saas-kosah-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#saas-kosah-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------NAMIKA OZZ----------*/
  /*View From Map*/
  jQuery('.namika-ozz').change(function() {
    if ($(this).prop('checked')) {
        $("#namika-ozz-tut").css("visibility", "visible");
    }
    else {
      $("#namika-ozz-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#namika-ozz-cl').click(function() {
    $("#namika-ozz-tut").css("visibility", "visible");
    $(".namika-ozz").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.namika-ozz-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#namika-ozz-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#namika-ozz-img").attr("src", "icons/ShrineIcon.svg");;
    }
    else {
        $("#namika-ozz-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#namika-ozz-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------WAHGO KATTA----------*/
  /*View From Map*/
  jQuery('.wahgo-katta').change(function() {
    if ($(this).prop('checked')) {
        $("#wahgo-katta-tut").css("visibility", "visible");
    }
    else {
      $("#wahgo-katta-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#wahgo-katta-cl').click(function() {
    $("#wahgo-katta-tut").css("visibility", "visible");
    $(".wahgo-katta").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.wahgo-katta-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#wahgo-katta-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#wahgo-katta-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#wahgo-katta-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#wahgo-katta-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

/*---------- DUELING PEAKS REGION ----------*/
  
/*----- RIDGELAND TOWER -----*/
  /*View from Map*/
  jQuery('.dp-tower').change(function() {
    if ($(this).prop('checked')) {
        $("#dp-tower-tut").css("visibility", "visible");
    }
    else {
      $("#dp-tower-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#dp-tower-cl').click(function() {
    $("#dp-tower-tut").css("visibility", "visible");
    $(".dp-tower").prop("checked", true);
  });

  /* ----------BOSH KALA----------*/
  /*View From Map*/
  jQuery('.bosh-kala').change(function() {
    if ($(this).prop('checked')) {
        $("#bosh-kala-tut").css("visibility", "visible");
    }
    else {
      $("#bosh-kala-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#bosh-kala-cl').click(function() {
    $("#bosh-kala-tut").css("visibility", "visible");
    $(".bosh-kala").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.bosh-kala-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#bosh-kala-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#bosh-kala-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#bosh-kala-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#bosh-kala-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------HILA RAO----------*/
  /*View From Map*/
  jQuery('.hila-rao').change(function() {
    if ($(this).prop('checked')) {
        $("#hila-rao-tut").css("visibility", "visible");
    }
    else {
      $("#hila-rao-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#hila-rao-cl').click(function() {
    $("#hila-rao-tut").css("visibility", "visible");
    $(".hila-rao").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.hila-rao-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#hila-rao-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#hila-rao-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#hila-rao-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#hila-rao-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------SHEE VENATH----------*/
  /*View From Map*/
  jQuery('.shee-venath').change(function() {
    if ($(this).prop('checked')) {
        $("#shee-venath-tut").css("visibility", "visible");
    }
    else {
      $("#shee-venath-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#shee-venath-cl').click(function() {
    $("#shee-venath-tut").css("visibility", "visible");
    $(".shee-venath").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.shee-venath-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#shee-venath-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#shee-venath-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#shee-venath-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#shee-venath-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------SHEE VANEER----------*/
  /*View From Map*/
  jQuery('.shee-vaneer').change(function() {
    if ($(this).prop('checked')) {
        $("#shee-vaneer-tut").css("visibility", "visible");
    }
    else {
      $("#shee-vaneer-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#shee-vaneer-cl').click(function() {
    $("#shee-vaneer-tut").css("visibility", "visible");
    $(".shee-vaneer").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.shee-vaneer-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#shee-vaneer-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#shee-vaneer-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#shee-vaneer-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#shee-vaneer-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------REE DAHEE----------*/
  /*View From Map*/
  jQuery('.ree-dahee').change(function() {
    if ($(this).prop('checked')) {
        $("#ree-dahee-tut").css("visibility", "visible");
    }
    else {
      $("#ree-dahee-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#ree-dahee-cl').click(function() {
    $("#ree-dahee-tut").css("visibility", "visible");
    $(".ree-dahee").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.ree-dahee-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#ree-dahee-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#ree-dahee-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#ree-dahee-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#ree-dahee-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------HA DAHAMAR----------*/
  /*View From Map*/
  jQuery('.ha-dahamar').change(function() {
    if ($(this).prop('checked')) {
        $("#ha-dahamar-tut").css("visibility", "visible");
    }
    else {
      $("#ha-dahamar-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#ha-dahamar-cl').click(function() {
    $("#ha-dahamar-tut").css("visibility", "visible");
    $(".ha-dahamar").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.ha-dahamar-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#ha-dahamar-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#ha-dahamar-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#ha-dahamar-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#ha-dahamar-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------TA'LOH NAEG----------*/
  /*View From Map*/
  jQuery('.taloh-naeg').change(function() {
    if ($(this).prop('checked')) {
        $("#taloh-naeg-tut").css("visibility", "visible");
    }
    else {
      $("#taloh-naeg-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#taloh-naeg-cl').click(function() {
    $("#taloh-naeg-tut").css("visibility", "visible");
    $(".taloh-naeg").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.taloh-naeg-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#taloh-naeg-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#taloh-naeg-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#taloh-naeg-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#taloh-naeg-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------LAKNA ROKEE----------*/
  /*View From Map*/
  jQuery('.lakna-rokee').change(function() {
    if ($(this).prop('checked')) {
        $("#lakna-rokee-tut").css("visibility", "visible");
    }
    else {
      $("#lakna-rokee-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#lakna-rokee-cl').click(function() {
    $("#lakna-rokee-tut").css("visibility", "visible");
    $(".lakna-rokee").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.lakna-rokee-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#lakna-rokee-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#lakna-rokee-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#lakna-rokee-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#lakna-rokee-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });

  /* ----------TOTO SAH----------*/
  /*View From Map*/
  jQuery('.toto-sah').change(function() {
    if ($(this).prop('checked')) {
        $("#toto-sah-tut").css("visibility", "visible");
    }
    else {
      $("#toto-sah-tut").css("visibility", "hidden");
    }
  });
  /*View From List*/
  jQuery('#toto-sah-cl').click(function() {
    $("#toto-sah-tut").css("visibility", "visible");
    $(".toto-sah").prop("checked", true);
  });
  /*Change Icon*/
  jQuery('.toto-sah-completed').change(function() {
    if ($(this).prop('checked')) {
        $("#toto-sah-loc").css("background-image", "url(icons/ShrineIcon.svg)");
        $("#toto-sah-img").attr("src", "icons/ShrineIcon.svg");
    }
    else {
        $("#toto-sah-loc").css("background-image", "url(icons/ShrineIcon-incomplete.svg)");
        $("#toto-sah-img").attr("src","icons/ShrineIcon-incomplete.svg");
    }
  });
});