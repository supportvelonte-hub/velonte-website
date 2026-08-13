function updateFishBowlPrice() {
  const select = document.getElementById("fishBowlSize");
  const option = select.options[select.selectedIndex];

  const selling = Number(option.value);
  const mrp = Number(option.getAttribute("data-mrp"));

  const discount = Math.round((1 - selling / mrp) * 100);

  document.getElementById("fishBowlPrice").innerHTML =
    '<span class="old-price">₹' + mrp.toLocaleString("en-IN") + '</span>' +
    '<strong class="sale-price">₹' + selling.toLocaleString("en-IN") + '</strong>' +
    '<span class="discount">' + discount + '% OFF</span>';
}
