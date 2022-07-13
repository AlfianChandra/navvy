/* Section Navigator Plugin by Alfian Chandra */
/* https://github.com/AlfianChandra/navvy | IG: @alf.chd - @afc.dev */
(function ($){
	$.fn.navvy = function (prevSections) {
		let el = $(this);
		let ind = $(this).attr("data-indicator");
		let indicator = $(ind);
		let action = indicator.children("a");
		let target = $(action.attr("data-target"));

		action.click(function () {
			$([document.documentElement, document.body]).animate({
				scrollTop: target.offset().top
			}, 500);
		});

		$(window).bind('scroll',function () {
			scan();
		});
		function scan()
		{
			if(prevSections == null) //jika stack urutan pertama
			{
				let scrollPos = $(window).scrollTop(); //ambil posisi scroll saat ini
				let targetHeight = el.outerHeight(); //ambil tinggi elemen target
				let perc = scrollPos / targetHeight * 100; //buat menjadi persen

				//terapkan nilai persen ke elemen inner indikator untuk efek
				if(perc < 100)
				{
					indicator.children("span").css("height",perc+"%");
				}
				else
				{
					indicator.children("span").css("height","100%");
				}
				return null;
			}
			else //jika bukan stack urutan pertama
			{
				let totalHeight = 0; //inisiasi variabel penghitung keseluruhan tinggi elemen
				let lastItemPos = 0; //inisiasi variabel untuk posisi elemen terakhir
				for(let i = 0;i < prevSections.length;i++) //lakukan perulangan pada array previousEl
				{
					//ambil nilai tinggi elemen dan
					// tambahkan ke totalHeight
					totalHeight += prevSections[i].outerHeight();

					//ambil nilai posisi elemen sebelumnya
					if(i === prevSections.length)
					{
						lastItemPos = prevSections[i].outerHeight();
					}
				}
				let scrollPos = $(window).scrollTop(); //ambil posisi scroll saat ini
				let targetHeight = el.outerHeight(); //ambil ketinggian elemen target
				if(scrollPos >= lastItemPos) //periksa posisi scroll dan posisi elemen terakhir
				{
					//kurangi nilai scrollPos
					//menggunakan totalHeight (keseluruhan tinggi)
					scrollPos -= totalHeight;
					let perc = scrollPos / targetHeight * 100; //ubah nilai ke persen
					if(perc < 100)
					{
						indicator.children("span").css("height",perc+"%"); //berikan efek ke indikator
					}
					else
					{
						indicator.children("span").css("height","100%"); //berikan efek ke indikator
					}
				}
				return null;
			}
		}

	}
})(jQuery);
