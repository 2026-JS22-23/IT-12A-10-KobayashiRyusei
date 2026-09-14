  /* =========================================================
     観光スポットのデータ
     ここを書き換えるだけで、自分の地元のスポットに差し替えられます
     ========================================================= */
  const spots = [
    {
      originalIndex: 0,
      name: "名古屋城",
      category: "castle",
      categoryLabel: "城",
      glyph: "城",
      color: "#1F2A44",
      lat: 35.1856,
      lng: 136.8994,
      address: "愛知県名古屋市中区本丸1-1",
      hours: "9:00〜16:30（入場は16:00まで）",
      description: "徳川家康の命により1610年に築かれた名古屋のシンボル。屋根の上できらめく金の鯱（しゃちほこ）は、名古屋を代表する意匠として広く知られています。天守閣は戦災で焼失しましたが、本丸御殿は絢爛な障壁画とともに復元され、江戸時代の書院造の姿を今に伝えています。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nagoya_Castle(Larger).jpg?width=960",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1856,136.8994"
    },
    {
      originalIndex: 1,
      name: "熱田神宮",
      category: "shrine",
      categoryLabel: "神社",
      glyph: "宮",
      color: "#A63D30",
      lat: 35.1289,
      lng: 136.9075,
      address: "愛知県名古屋市熱田区神宮1-1-1",
      hours: "参拝自由（授与所は8:30〜16:30頃）",
      description: "三種の神器のひとつ「草薙神剣」を祀る、伊勢神宮に次ぐ格式を持つ古社。広大な境内には樹齢千年を超えるクスノキが茂り、都会の喧騒を忘れさせる静けさに包まれています。年間を通じて多くの神事が行われ、初詣には多くの参拝者で賑わいます。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Atsuta-jingu_Shrine_Haiden,_Jingu_Atsuta_Ward_Nagoya_2023.jpg?width=960",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1289,136.9075"
    },
    {
      originalIndex: 2,
      name: "東山動植物園",
      category: "garden",
      categoryLabel: "動植物園",
      glyph: "園",
      color: "#3E6B4F",
      lat: 35.1522,
      lng: 136.9691,
      address: "愛知県名古屋市千種区東山元町3-70",
      hours: "9:00〜16:50（入園は16:30まで）、月曜休園",
      description: "1937年開園、動物園・植物園・遊園地が一体となった全国有数の規模を誇るスポット。ゴリラの「シャバーニ」をはじめ500種近い動物に出会えるほか、展望塔「スカイタワー」からは名古屋市街を一望できます。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Higashiyama_Zoo_and_Botanical_Gardens_Aerial.JPG?width=960",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1522,136.9691"
    },
    {
      originalIndex: 3,
      name: "大須観音",
      category: "temple",
      categoryLabel: "寺院",
      glyph: "観",
      color: "#C9A227",
      lat: 35.1595,
      lng: 136.9008,
      address: "愛知県名古屋市中区大須2-21-47",
      hours: "境内参拝自由（6:00〜19:00頃）",
      description: "日本三大観音のひとつに数えられる真言宗の名刹。門前には約1200店が軒を連ねる大須商店街が広がり、下町グルメやサブカルチャーショップ巡りも楽しめます。毎月18・28日の縁日には多くの露店が並びます。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Osu_Kannon_panorama.jpg?width=960",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1595,136.9008"
    },
    {
      originalIndex: 4,
      name: "名古屋港水族館",
      category: "aquarium",
      categoryLabel: "水族館",
      glyph: "港",
      color: "#3E5C76",
      lat: 35.0862,
      lng: 136.8829,
      address: "愛知県名古屋市港区港町1-3",
      hours: "9:30〜17:30（季節により変動）、月曜休館",
      description: "シャチやベルーガ、イルカが暮らす日本最大級の水槽を持つ水族館。南館では赤道付近の海を、北館では極地の海を再現しており、迫力満点のイルカパフォーマンスも見どころです。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Port_of_Nagoya_Public_Aquarium_from_outside_1.jpg?width=960",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=35.0862,136.8829"
    }
  ];

  /* Googleマップに乗せる自分だけの色スタイル（クリーム×紺×金） */
  const mapStyle = [
    { elementType: "geometry", stylers: [{ color: "#f6f1e7" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f6f1e7" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#5b6472" }] },
    { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#c9a227" }, { weight: 0.6 }] },
    { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
    { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f6f1e7" }] },
    { featureType: "poi", stylers: [{ visibility: "off" }] },
    { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#dfe7d8" }] },
    { featureType: "poi.park", elementType: "labels", stylers: [{ visibility: "off" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
    { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#e7ddc6" }] },
    { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#ecd9a0" }] },
    { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#8a6d1f" }] },
    { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#5b6472" }] },
    { featureType: "transit", stylers: [{ visibility: "off" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#c7d9e0" }] },
    { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3e5c76" }] }
  ];

  /* ここから下は状態を入れておく箱（変数） */
  let map;
  let userMarker = null;
  const markers = [];
  const infoWindows = [];
  let currentCategory = "all";
  let currentSortedSpots = [];

  /* -----------------------------------------
     カテゴリごとに色分けしたピン画像をつくる関数
     ----------------------------------------- */
  function pinIcon(color, glyph){
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="56" viewBox="0 0 44 56">' +
      '<path d="M22 0C9.85 0 0 9.85 0 22c0 15.5 22 34 22 34s22-18.5 22-34C44 9.85 34.15 0 22 0z" fill="' + color + '"/>' +
      '<circle cx="22" cy="22" r="14" fill="#fbf8f2"/>' +
      '<text x="22" y="27" font-size="15" font-family="sans-serif" font-weight="700" fill="' + color + '" text-anchor="middle">' + glyph + '</text>' +
      '</svg>';
    return {
      url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg),
      scaledSize: new google.maps.Size(38, 48),
      anchor: new google.maps.Point(19, 48)
    };
  }

  /* 現在地マーカー用の青い丸アイコン */
  function userLocationIcon(){
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">' +
      '<circle cx="13" cy="13" r="7" fill="#3e5c76" stroke="#fbf8f2" stroke-width="3"/>' +
      '</svg>';
    return {
      url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg),
      scaledSize: new google.maps.Size(26, 26),
      anchor: new google.maps.Point(13, 13)
    };
  }

  /* 情報ウィンドウの中身（画像＋名前だけ）を組み立てる関数 */
  function buildInfoWindowContent(spot){
    return (
      '<div class="iw">' +
        '<img class="iw-photo" src="' + spot.image + '" alt="' + spot.name + '">' +
        '<div class="iw-body">' +
          '<h3 class="iw-title">' + spot.name + '</h3>' +
        '</div>' +
      '</div>'
    );
  }

  /* 2点間のおおよその距離(km)を計算する（現在地からの距離表示に使用） */
  function deg2rad(deg){ return deg * Math.PI / 180; }
  function haversineKm(lat1, lng1, lat2, lng2){
    const R = 6371; // 地球の半径(km)
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  /* -----------------------------------------
     右側の「見どころ一覧」(jQuery UI アコーディオン) を
     渡されたリストの順番で作り直す
     ----------------------------------------- */
  function renderSidebar(list){
    const $acc = $("#spot-accordion");

    if ($acc.hasClass("ui-accordion")){
      $acc.accordion("destroy");
    }
    $acc.empty();

    list.forEach(function(spot){
      const distanceText = (spot.distanceKm != null) ? spot.distanceKm.toFixed(1) + "km" : "";

      const $header = $("<h3></h3>").attr("data-index", spot.originalIndex).html(
        '<img class="thumb" src="' + spot.image + '" alt="' + spot.name + '">' +
        '<span class="h-text">' +
          '<span class="h-name">' + spot.name + '</span>' +
          '<span class="h-badge" style="background:' + spot.color + '">' + spot.categoryLabel + '</span>' +
        '</span>' +
        '<span class="h-distance">' + distanceText + '</span>'
      );

      const $panel = $("<div></div>").html(
        '<p class="panel-desc">' + spot.description + '</p>' +
        '<p class="panel-meta">📍 ' + spot.address + '<br>🕒 ' + spot.hours + '</p>' +
        '<a class="btn-link" href="' + spot.mapsUrl + '" target="_blank" rel="noopener">Googleマップでルート検索</a>'
      );

      $acc.append($header, $panel);
    });

    if (list.length === 0){
      $acc.append('<p class="empty-msg">該当するスポットがありません。</p>');
      return;
    }

    $acc.accordion({
      header: "> h3",
      collapsible: true,
      active: false,
      heightStyle: "content",
      icons: false,
      activate: function(event, ui){
        if (ui.newHeader && ui.newHeader.length){
          const idx = Number(ui.newHeader.attr("data-index"));
          focusSpot(idx, { fromAccordion: true });
        }
      }
    });
  }

  /* カテゴリ絞り込み・並び順にあわせて、地図の表示とサイドバーを更新する */
  function updateView(){
    if (markers.length === 0) return; // 地図の読み込み前は何もしない

    spots.forEach(function(spot){
      const visible = (currentCategory === "all" || spot.category === currentCategory);
      markers[spot.originalIndex].setVisible(visible);
    });

    const list = currentSortedSpots.filter(function(spot){
      return currentCategory === "all" || spot.category === currentCategory;
    });
    renderSidebar(list);
  }

  /* マーカー or 一覧のどちらから呼ばれても、地図とアコーディオンを連動させる */
  function focusSpot(originalIndex, opts){
    opts = opts || {};
    const spot = spots[originalIndex];
    const marker = markers[originalIndex];
    if (!spot || !marker) return;

    map.panTo(marker.getPosition());
    if (map.getZoom() < 15) map.setZoom(15);

    infoWindows.forEach(function(iw){ iw.close(); });
    infoWindows[originalIndex].open({ map: map, anchor: marker });

    if (opts.fromMarker){
      const $header = $('#spot-accordion > h3[data-index="' + originalIndex + '"]');
      if ($header.length){
        const pos = $("#spot-accordion > h3").index($header);
        $("#spot-accordion").accordion("option", "active", pos);
        $header.effect("highlight", { color: "#c9a227" }, 900);
      }
    }
  }

  /* カテゴリ絞り込みボタン（jQuery UI controlgroup）の初期化 */
  function initFilters(){
    $("#filter-group").controlgroup();
    $("#filter-group").on("change", 'input[type="radio"]', function(){
      currentCategory = this.value;
      updateView();
    });
  }

  /* 現在地マーカーを表示し、全スポットが収まるように地図を調整する */
  function showUserMarker(lat, lng){
    if (userMarker){ userMarker.setMap(null); }
    userMarker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      title: "現在地",
      icon: userLocationIcon(),
      zIndex: 999
    });

    const bounds = new google.maps.LatLngBounds();
    bounds.extend(userMarker.getPosition());
    spots.forEach(function(spot){
      bounds.extend({ lat: spot.lat, lng: spot.lng });
    });
    map.fitBounds(bounds);
  }

  /* 「現在地から近い順に並べる」ボタンの初期化 */
  function initGeoSort(){
    $("#geo-sort-btn").on("click", function(){
      if (!navigator.geolocation){
        $("#geo-status").text("お使いのブラウザは位置情報に対応していません。");
        return;
      }
      $("#geo-status").text("現在地を取得しています…");

      navigator.geolocation.getCurrentPosition(
        function(pos){
          const myLat = pos.coords.latitude;
          const myLng = pos.coords.longitude;

          spots.forEach(function(spot){
            spot.distanceKm = haversineKm(myLat, myLng, spot.lat, spot.lng);
          });
          currentSortedSpots = spots.slice().sort(function(a, b){
            return a.distanceKm - b.distanceKm;
          });

          showUserMarker(myLat, myLng);
          updateView();
          $("#geo-status").text("現在地から近い順に並び替えました。");
        },
        function(){
          $("#geo-status").text("位置情報を取得できませんでした。ブラウザの設定をご確認ください。");
        }
      );
    });
  }

  /* -----------------------------------------
     Google Maps JavaScript API から呼び出される初期化関数
     (この関数名は index.html 下部の <script> の callback= の値と揃えること)
     ----------------------------------------- */
  function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.146, lng: 136.912 },
      zoom: 12,
      styles: mapStyle,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      clickableIcons: false
    });

    const bounds = new google.maps.LatLngBounds();

    spots.forEach(function(spot){
      const marker = new google.maps.Marker({
        position: { lat: spot.lat, lng: spot.lng },
        map: map,
        title: spot.name,
        icon: pinIcon(spot.color, spot.glyph)
      });

      const infoWindow = new google.maps.InfoWindow({
        content: buildInfoWindowContent(spot),
        maxWidth: 260
      });

      marker.addListener("click", function(){
        focusSpot(spot.originalIndex, { fromMarker: true });
      });

      markers[spot.originalIndex] = marker;
      infoWindows[spot.originalIndex] = infoWindow;
      bounds.extend(marker.getPosition());
    });

    map.fitBounds(bounds);
    google.maps.event.addListenerOnce(map, "bounds_changed", function(){
      if (map.getZoom() > 15) map.setZoom(15);
    });

    currentSortedSpots = spots.slice();
    renderSidebar(currentSortedSpots);
    initFilters();
    initGeoSort();
  }
