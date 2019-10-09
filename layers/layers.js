var wms_layers = [];
var lyr_ViedoTioPepe_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Viñedo Tio Pepe",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ViedoTioPepe_0.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-683638.225113, 4401378.117901, -682242.467618, 4402539.283291]
                            })
                        });var lyr_20100705Vigorosidad_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "2010-07-05.Vigorosidad",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20100705Vigorosidad_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-683638.225113, 4401378.117901, -682242.467618, 4402539.283291]
                            })
                        });var lyr_20100603Vigorosidad_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "2010-06-03.Vigorosidad",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20100603Vigorosidad_2.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-683638.225113, 4401378.117901, -682242.467618, 4402539.283291]
                            })
                        });var lyr_20100503Vigorosidad_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "2010-05-03.Vigorosidad",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20100503Vigorosidad_3.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-683638.225113, 4401378.117901, -682242.467618, 4402539.283291]
                            })
                        });
var group_02Vigorosidad = new ol.layer.Group({
                                layers: [lyr_20100705Vigorosidad_1,lyr_20100603Vigorosidad_2,lyr_20100503Vigorosidad_3,],
                                title: "02.Vigorosidad"});
var group_Fondo_2013 = new ol.layer.Group({
                                layers: [lyr_ViedoTioPepe_0,],
                                title: "Fondo_2013"});

lyr_ViedoTioPepe_0.setVisible(true);lyr_20100705Vigorosidad_1.setVisible(false);lyr_20100603Vigorosidad_2.setVisible(false);lyr_20100503Vigorosidad_3.setVisible(false);
var layersList = [group_Fondo_2013,group_02Vigorosidad];
