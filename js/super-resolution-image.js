document.getElementById("download-button").disabled = true;
document.getElementById("images").hidden = true;
var img = false;
var nooversize = null;

function startDownload() {
	$("#apiId").val("namnyang0510710b9f822b15");
	$("#apiKey").val("e616399c73fb432985997d92acd65783");
	$("#download-form").submit();
	$("#download-modal").modal("toggle");
}

$("#upload-video").click(function (e) {
	e.preventDefault();
	$("#video").click();
});
$("#upload-images").click(function (e) {
	e.preventDefault();
	$("#images").click();
});

// var _URL = window.URL;
// $("#images").change(function (e) {
// 	// 해상도 체크
// 	var file, img;
// 	if ((file = this.files[0])) {
// 		img = new Image();
// 		img.onload = function () {
// 			imgwidth = this.width;
// 			imgheight = this.height;

// 			if ((imgwidth >= 200) & (imgheight >= 200)) {
// 				toast("File Resolution Exceeded<br>200 x 200 px");
// 				$(this).val("");
// 				// $("#image-title").html(this.files[0].name);
// 				nooversize = false;
// 				return;
// 			} else {
// 				readImageURL(this);
// 			}
// 		};
// 		img.src = _URL.createObjectURL(file);
// 	}
// });

function readImageURL(input) {
	// if (input.files && input.files[0]) {
	if ($(input).val() != "") {
		// 확장자 체크
		var ext = $(input).val().split(".").pop().toLowerCase();
		if ($.inArray(ext, ["jpg", "png"]) == -1) {
			toast("Only Support PNG / JPG!");
			$(input).val("");
			return;
		}
		// 용량 체크
		var fileSize = input.files[0].size;
		var maxSize = 1 * 1024 * 1024;
		if (fileSize > maxSize) {
			toast("File Size Exceeded 1MB");
			$(input).val("");
			return;
		}
		imageFileName = input.files[0].name;
		imageName = imageFileName.substr(0, imageFileName.length - 4); // 확장자 제외하기
		console.log(imageName);
		if (imageName.length > 25) {
			imageFileName = imageName.slice(0, 25) + "...";
		}
		$("#image-title").html(imageFileName);
		img = true;
		// nooversize = true;
		var img = new Image();
		console.log(img.width);
		checkDownloadReady();
	}

	// } else {
	// 	checkDownloadReady();
	// }
}
function checkDownloadReady() {
	if (img) {
		document.getElementById("download-button").disabled = false;
	} else {
		document.getElementById("download-button").disabled = true;
	}
}
function toast(message) {
	toastr.options = {
		closeButton: true,
		debug: false,
		newestOnTop: false,
		progressBar: false,
		positionClass: "toast-bottom-right",
		preventDuplicates: false,
		showDuration: "100",
		hideDuration: "100",
		timeOut: "5000",
		extendedTimeOut: "1000",
		showEasing: "swing",
		hideEasing: "linear",
		showMethod: "fadeIn",
		hideMethod: "fadeOut",
	};
	toastr.warning(message);
}
