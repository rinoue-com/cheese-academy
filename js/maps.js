function initMap() {
    var myLatlng = new google.maps.LatLng(35.66756740099252, 139.71385641378473);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatlng,
        zoom: 16,
        mapTypeId: 'roadmap',
        mapId: '38e1e183403e690e'
    });

    const beachFlagImg = document.createElement('img');
    beachFlagImg.src = '/html_inoue_03/img/logo.png';

    // マーカーの追加
    var marker = new google.maps.marker.AdvancedMarkerElement({
        position: myLatlng,
        title: 'チーズアカデミーTOKYO',
        // icon: '../img/logo.png',
        content: beachFlagImg
    });

    // インフォウィンドウの作成
    var infowindow = new google.maps.InfoWindow({
        content: 'チーズアカデミーTOKYO'
    });

    // マーカーをクリックした際にインフォウィンドウを表示
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    marker.setMap(map);
    infowindow.open(map, marker);
}
