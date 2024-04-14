
document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');

    if (searchBar) {
        searchBar.addEventListener('input', function () {
            const searchTerm = searchBar.value.toLowerCase();
            const recipeItems = document.querySelectorAll('.recipe');

            recipeItems.forEach(recipeItem => {
                const recipeNameElement = recipeItem.querySelector('.name');

                if (recipeNameElement) {
                    const recipeName = recipeNameElement.textContent.toLowerCase();
                    const isVisible = recipeName.includes(searchTerm);

                    recipeItem.style.display = isVisible ? 'block' : 'none';
                }
            });
        });
    } else {
        console.error('Search bar not found.');
    }
});

// JavaScript function to show the pop-up
function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}
function showPopup2() {
    document.getElementById('popup2').style.display = 'block';
    document.getElementById('overlay2').style.display = 'block';
}
function showPopup3() {
    document.getElementById('popup3').style.display = 'block';
    document.getElementById('overlay3').style.display = 'block';
}
function showPopup4() {
    document.getElementById('popup4').style.display = 'block';
    document.getElementById('overlay4').style.display = 'block';
}
function showPopup5() {
    document.getElementById('popup5').style.display = 'block';
    document.getElementById('overlay5').style.display = 'block';
}
function showPopup6() {
    document.getElementById('popup6').style.display = 'block';
    document.getElementById('overlay6').style.display = 'block';
}
function showPopup7() {
    document.getElementById('popup7').style.display = 'block';
    document.getElementById('overlay7').style.display = 'block';
}
function showPopup8() {
    document.getElementById('popup8').style.display = 'block';
    document.getElementById('overlay8').style.display = 'block';
}
function showPopup9() {
    document.getElementById('popup9').style.display = 'block';
    document.getElementById('overlay9').style.display = 'block';
}
function showPopup10() {
    document.getElementById('popup10').style.display = 'block';
    document.getElementById('overlay10').style.display = 'block';
}
function showPopup11() {
    document.getElementById('popup11').style.display = 'block';
    document.getElementById('overlay11').style.display = 'block';
}
function showPopup12() {
    document.getElementById('popup12').style.display = 'block';
    document.getElementById('overlay12').style.display = 'block';
}
function showPopup13() {
    document.getElementById('popup13').style.display = 'block';
    document.getElementById('overlay13').style.display = 'block';
}


// code for hide pop up
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
function hidePopup2() {
    document.getElementById('popup2').style.display = 'none';
    document.getElementById('overlay2').style.display = 'none';
}
function hidePopup3() {
    document.getElementById('popup3').style.display = 'none';
    document.getElementById('overlay3').style.display = 'none';
}
function hidePopup4() {
    document.getElementById('popup4').style.display = 'none';
    document.getElementById('overlay4').style.display = 'none';
}
function hidePopup5() {
    document.getElementById('popup5').style.display = 'none';
    document.getElementById('overlay5').style.display = 'none';
}
function hidePopup6() {
    document.getElementById('popup6').style.display = 'none';
    document.getElementById('overlay6').style.display = 'none';
}
function hidePopup7() {
    document.getElementById('popup7').style.display = 'none';
    document.getElementById('overlay7').style.display = 'none';
}
function hidePopup8() {
    document.getElementById('popup8').style.display = 'none';
    document.getElementById('overlay8').style.display = 'none';
}
function hidePopup9() {
    document.getElementById('popup9').style.display = 'none';
    document.getElementById('overlay9').style.display = 'none';
}
function hidePopup10() {
    document.getElementById('popup10').style.display = 'none';
    document.getElementById('overlay10').style.display = 'none';
}
function hidePopup11() {
    document.getElementById('popup11').style.display = 'none';
    document.getElementById('overlay11').style.display = 'none';
}
function hidePopup12() {
    document.getElementById('popup12').style.display = 'none';
    document.getElementById('overlay12').style.display = 'none';
}
function hidePopup13() {
    document.getElementById('popup13').style.display = 'none';
    document.getElementById('overlay13').style.display = 'none';
}
