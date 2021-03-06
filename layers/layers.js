var wms_layers = [];

var format_ne_10m_ocean_0 = new ol.format.GeoJSON();
var features_ne_10m_ocean_0 = format_ne_10m_ocean_0.readFeatures(json_ne_10m_ocean_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_ocean_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_ocean_0.addFeatures(features_ne_10m_ocean_0);
var lyr_ne_10m_ocean_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_ocean_0, 
                style: style_ne_10m_ocean_0,
                interactive: false,
                title: '<img src="styles/legend/ne_10m_ocean_0.png" /> ne_10m_ocean'
            });
var format_ne_10m_admin_0_countries_1 = new ol.format.GeoJSON();
var features_ne_10m_admin_0_countries_1 = format_ne_10m_admin_0_countries_1.readFeatures(json_ne_10m_admin_0_countries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_admin_0_countries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_admin_0_countries_1.addFeatures(features_ne_10m_admin_0_countries_1);
var lyr_ne_10m_admin_0_countries_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_admin_0_countries_1, 
                style: style_ne_10m_admin_0_countries_1,
                interactive: false,
                title: '<img src="styles/legend/ne_10m_admin_0_countries_1.png" /> ne_10m_admin_0_countries'
            });
var format_ne_10m_coastline_2 = new ol.format.GeoJSON();
var features_ne_10m_coastline_2 = format_ne_10m_coastline_2.readFeatures(json_ne_10m_coastline_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_coastline_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_coastline_2.addFeatures(features_ne_10m_coastline_2);
var lyr_ne_10m_coastline_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_coastline_2, 
                style: style_ne_10m_coastline_2,
                interactive: false,
                title: '<img src="styles/legend/ne_10m_coastline_2.png" /> ne_10m_coastline'
            });
var format_romancemeteries_3 = new ol.format.GeoJSON();
var features_romancemeteries_3 = format_romancemeteries_3.readFeatures(json_romancemeteries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_romancemeteries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_romancemeteries_3.addFeatures(features_romancemeteries_3);
var lyr_romancemeteries_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_romancemeteries_3, 
                style: style_romancemeteries_3,
                interactive: true,
    title: 'roman-cemeteries<br />\
    <img src="styles/legend/romancemeteries_3_0.png" /> Influenced Romans<br />\
    <img src="styles/legend/romancemeteries_3_1.png" /> Roman<br />\
    <img src="styles/legend/romancemeteries_3_2.png" /> Roman influenced burials<br />\
    <img src="styles/legend/romancemeteries_3_3.png" /> Roman influenced necropolis<br />\
    <img src="styles/legend/romancemeteries_3_4.png" /> Roman influenced tomb<br />\
    <img src="styles/legend/romancemeteries_3_5.png" /> <br />'
        });

lyr_ne_10m_ocean_0.setVisible(true);lyr_ne_10m_admin_0_countries_1.setVisible(true);lyr_ne_10m_coastline_2.setVisible(true);lyr_romancemeteries_3.setVisible(true);
var layersList = [lyr_ne_10m_ocean_0,lyr_ne_10m_admin_0_countries_1,lyr_ne_10m_coastline_2,lyr_romancemeteries_3];
lyr_ne_10m_ocean_0.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'min_zoom': 'min_zoom', });
lyr_ne_10m_admin_0_countries_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'LABELRANK': 'LABELRANK', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SU_DIF': 'SU_DIF', 'SUBUNIT': 'SUBUNIT', 'SU_A3': 'SU_A3', 'BRK_DIFF': 'BRK_DIFF', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'BRK_A3': 'BRK_A3', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'GDP_MD_EST': 'GDP_MD_EST', 'POP_YEAR': 'POP_YEAR', 'LASTCENSUS': 'LASTCENSUS', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'WIKIPEDIA': 'WIKIPEDIA', 'FIPS_10_': 'FIPS_10_', 'ISO_A2': 'ISO_A2', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'WOE_ID': 'WOE_ID', 'WOE_ID_EH': 'WOE_ID_EH', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_A3_IS': 'ADM0_A3_IS', 'ADM0_A3_US': 'ADM0_A3_US', 'ADM0_A3_UN': 'ADM0_A3_UN', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', });
lyr_ne_10m_coastline_2.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'min_zoom': 'min_zoom', });
lyr_romancemeteries_3.set('fieldAliases', {'Site Name': 'Site Name', 'City/Town': 'City/Town', 'Plid': 'Plid', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Place types': 'Place types', 'Period': 'Period', 'Artifact type': 'Artifact type', 'Roman influences': 'Roman influences', 'Period Range': 'Period Range', });
lyr_ne_10m_ocean_0.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'Range', 'min_zoom': 'Range', });
lyr_ne_10m_admin_0_countries_1.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'LABELRANK': 'TextEdit', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_DIF': 'TextEdit', 'LEVEL': 'TextEdit', 'TYPE': 'TextEdit', 'ADMIN': 'TextEdit', 'ADM0_A3': 'TextEdit', 'GEOU_DIF': 'TextEdit', 'GEOUNIT': 'TextEdit', 'GU_A3': 'TextEdit', 'SU_DIF': 'TextEdit', 'SUBUNIT': 'TextEdit', 'SU_A3': 'TextEdit', 'BRK_DIFF': 'TextEdit', 'NAME': 'TextEdit', 'NAME_LONG': 'TextEdit', 'BRK_A3': 'TextEdit', 'BRK_NAME': 'TextEdit', 'BRK_GROUP': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'NAME_CIAWF': 'TextEdit', 'NOTE_ADM0': 'TextEdit', 'NOTE_BRK': 'TextEdit', 'NAME_SORT': 'TextEdit', 'NAME_ALT': 'TextEdit', 'MAPCOLOR7': 'TextEdit', 'MAPCOLOR8': 'TextEdit', 'MAPCOLOR9': 'TextEdit', 'MAPCOLOR13': 'TextEdit', 'POP_EST': 'TextEdit', 'POP_RANK': 'TextEdit', 'GDP_MD_EST': 'TextEdit', 'POP_YEAR': 'TextEdit', 'LASTCENSUS': 'TextEdit', 'GDP_YEAR': 'TextEdit', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'WIKIPEDIA': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WOE_ID': 'TextEdit', 'WOE_ID_EH': 'TextEdit', 'WOE_NOTE': 'TextEdit', 'ADM0_A3_IS': 'TextEdit', 'ADM0_A3_US': 'TextEdit', 'ADM0_A3_UN': 'TextEdit', 'ADM0_A3_WB': 'TextEdit', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_LEN': 'TextEdit', 'LONG_LEN': 'TextEdit', 'ABBREV_LEN': 'TextEdit', 'TINY': 'TextEdit', 'HOMEPART': 'TextEdit', 'MIN_ZOOM': 'TextEdit', 'MIN_LABEL': 'TextEdit', 'MAX_LABEL': 'TextEdit', });
lyr_ne_10m_coastline_2.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'TextEdit', 'min_zoom': 'TextEdit', });
lyr_romancemeteries_3.set('fieldImages', {'Site Name': 'TextEdit', 'City/Town': 'TextEdit', 'Plid': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Place types': 'TextEdit', 'Period': 'TextEdit', 'Artifact type': 'TextEdit', 'Roman influences': 'TextEdit', 'Period Range': '', });
lyr_ne_10m_ocean_0.set('fieldLabels', {'featurecla': 'no label', 'scalerank': 'no label', 'min_zoom': 'no label', });
lyr_ne_10m_admin_0_countries_1.set('fieldLabels', {'scalerank': 'no label', 'featurecla': 'no label', 'LABELRANK': 'no label', 'SOVEREIGNT': 'no label', 'SOV_A3': 'no label', 'ADM0_DIF': 'no label', 'LEVEL': 'no label', 'TYPE': 'no label', 'ADMIN': 'no label', 'ADM0_A3': 'no label', 'GEOU_DIF': 'no label', 'GEOUNIT': 'no label', 'GU_A3': 'no label', 'SU_DIF': 'no label', 'SUBUNIT': 'no label', 'SU_A3': 'no label', 'BRK_DIFF': 'no label', 'NAME': 'no label', 'NAME_LONG': 'no label', 'BRK_A3': 'no label', 'BRK_NAME': 'no label', 'BRK_GROUP': 'no label', 'ABBREV': 'no label', 'POSTAL': 'no label', 'FORMAL_EN': 'no label', 'FORMAL_FR': 'no label', 'NAME_CIAWF': 'no label', 'NOTE_ADM0': 'no label', 'NOTE_BRK': 'no label', 'NAME_SORT': 'no label', 'NAME_ALT': 'no label', 'MAPCOLOR7': 'no label', 'MAPCOLOR8': 'no label', 'MAPCOLOR9': 'no label', 'MAPCOLOR13': 'no label', 'POP_EST': 'no label', 'POP_RANK': 'no label', 'GDP_MD_EST': 'no label', 'POP_YEAR': 'no label', 'LASTCENSUS': 'no label', 'GDP_YEAR': 'no label', 'ECONOMY': 'no label', 'INCOME_GRP': 'no label', 'WIKIPEDIA': 'no label', 'FIPS_10_': 'no label', 'ISO_A2': 'no label', 'ISO_A3': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'WOE_ID': 'no label', 'WOE_ID_EH': 'no label', 'WOE_NOTE': 'no label', 'ADM0_A3_IS': 'no label', 'ADM0_A3_US': 'no label', 'ADM0_A3_UN': 'no label', 'ADM0_A3_WB': 'no label', 'CONTINENT': 'no label', 'REGION_UN': 'no label', 'SUBREGION': 'no label', 'REGION_WB': 'no label', 'NAME_LEN': 'no label', 'LONG_LEN': 'no label', 'ABBREV_LEN': 'no label', 'TINY': 'no label', 'HOMEPART': 'no label', 'MIN_ZOOM': 'no label', 'MIN_LABEL': 'no label', 'MAX_LABEL': 'no label', });
lyr_ne_10m_coastline_2.set('fieldLabels', {'featurecla': 'no label', 'scalerank': 'no label', 'min_zoom': 'no label', });
lyr_romancemeteries_3.set('fieldLabels', {'Site Name': 'inline label', 'City/Town': 'no label', 'Plid': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Place types': 'no label', 'Period': 'no label', 'Artifact type': 'no label', 'Roman influences': 'no label', 'Period Range': 'no label', });
lyr_romancemeteries_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});