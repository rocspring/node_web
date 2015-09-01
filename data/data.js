var express = require('express');
var fs = require('fs');
var app = express();
var date = new Date();

var homeData = JSON.parse(fs.readFileSync('../json/' + date + '/netsniff.json', 'utf8')),
	finalData = JSON.parse(fs.readFileSync('../json/' + date + '/finalnetsniff.json', 'utf8'));

function handlerData(homeData, finalData) {
	var result = {};

	var css = [],
		js = [],
		img = [],
		adI = [],
		adS = [],
		zz = [],
		imp = [];

	var finalCss = [],
		finalJs = [],
		finalImg = [],
		finalAdI = [],
		finalAdS = [],
		finalzz = [],
		finalImp = [];

	var homeResultData = json.log.entries,
		finalResultData = finalJson.log.entries;


	for (var i = 0, hlen < homeResultData.length; i < len; i++) {

		cssRex = (/^http:\/\/.+?\.css$/gi).test(homeResultData[i].request.url);
		if (cssRex) {
			css.push(homeResultData[i]);
		}

		jsRex = (/^http:\/\/.+?\.js$/gi).test(homeResultData[i].request.url);
		if (jsRex) {
			js.push(homeResultData[i]);
		}

		imgRex = (/^http:\/\/.+?\.(png|jpg|jpeg|gif|ico)/gi).test(homeResultData[i].request.url);
		if (imgRex) {
			img.push(homeResultData[i]);
		}

		adIRex = (/^http:\/\/i.go.sohu.com/gi).test(homeResultData[i].request.url);
		if (adIRex) {
			adI.push(homeResultData[i]);
		}

		adSRex = (/^http:\/\/s.go.sohu.com/gi).test(homeResultData[i].request.url);
		if (adSRex) {
			adS.push(homeResultData[i]);
		}

		zzRex = (/^http:\/\/zz.m.sohu.com/gi).test(homeResultData[i].request.url);
		if (zzRex) {
			zz.push(homeResultData[i]);
		}

		impRex = (/^http:\/\/imp.optaim.com/gi).test(homeResultData[i].request.url);
		if (impRex) {
			imp.push(homeResultData[i]);
		}

	}

	for (var j = 0; flen = finalResultData.length; j < flen; j++) {

		cssRex = (/^http:\/\/.+?\.css$/gi).test(finalResultData[i].request.url);
		if (cssRex) {
			finalCss.push(finalResultData[i]);
		}

		jsRex = (/^http:\/\/.+?\.js$/gi).test(finalResultData[i].request.url);
		if (jsRex) {
			finalJs.push(finalResultData[i]);
		}

		imgRex = (/^http:\/\/.+?\.(png|jpg|jpeg|gif|ico)/gi).test(finalResultData[i].request.url);
		if (imgRex) {
			finalImg.push(finalResultData[i]);
		}

		adIRex = (/^http:\/\/i.go.sohu.com/gi).test(finalResultData[i].request.url);
		if (adIRex) {
			finalAdI.push(finalResultData[i]);
		}

		adSRex = (/^http:\/\/s.go.sohu.com/gi).test(finalResultData[i].request.url);
		if (adSRex) {
			finalAdS.push(finalResultData[i]);
		}

		zzRex = (/^http:\/\/zz.m.sohu.com/gi).test(finalResultData[i].request.url);
		if (zzRex) {
			finalzz.push(finalResultData[i]);
		}

		impRex = (/^http:\/\/imp.optaim.com/gi).test(finalResultData[i].request.url);
		if (impRex) {
			finalImp.push(finalResultData[i]);
		}

	}

	result = {
		pageonloadtime: json.log.pages[0].pageTimings.onLoad,
		request: homeResultData.length,
		cssNum: css.length,
		jsNum: js.length,
		imgNum: img.length,
		iGoNum: adI.length,
		sGoNum: adS.length,
		zzNum: zz.length,
		impNum: imp.length,
		time: time,

		finalPageonloadtime: finalJson.log.pages[0].pageTimings.onLoad,
		finalRequest: finalResultData.length,
		finalCssNum: finalCss.length,
		finalJsNum: finalJs.length,
		finalImgNum: finalImg.length,
		finaliGoNum: finalAdI.length,
		finalsGoNum: finalAdS.length,
		finalzzNum: finalzz.length,
		finalImpNum: finalImp.length,
	};

	return result;
}



var data = handlerData(homeData, finalData);

module.exports = data;