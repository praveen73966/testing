// let countries =["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla",
// "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan",
// "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan",  "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory",
// "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
// "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", 
// "Cocos (Keeling) Ilands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the",
// "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic",
// "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", 
// "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands",
// "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", 
// "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece",
// "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
// "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary",
// "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", 
// "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of",
// "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon",
// "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", 
// "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", 
// "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", 
// "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat",
// "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles",
// "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island",
// "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
// "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar",
// "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
// "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
// "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)",
// "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands",
// "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands",
// "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan",
// "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia",
// "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates" ];


//javascript event delegation
// it is a simple technique by which you add a single event handler to a present element 

// capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation 

//event elegation
// let ul =  document.getElementById("ul");

// ul.addEventListener("click",e=>{
//     console.log(e.target);
// });

//bubbling

// let grandparent = document.getElementById("grandparent");
// let parent =  document.getElementById("parent");
// let child = document.getElementById("child");

// grandparent.addEventListener("click",e=>{
//     console.log("grandparent clicked ");
// });

// parent.addEventListener("click",e=>{
//     console.log("parent clicked ");
// });

// child.addEventListener("click",e=>{
//     console.log("child clicked ");
// });

//capturing
// let grandparent = document.getElementById("grandparent");
// let parent =  document.getElementById("parent");
// let child = document.getElementById("child");

// grandparent.addEventListener("click",e=>{
//     console.log("grandparent clicked ");
// },true);

// parent.addEventListener("click",e=>{
//     console.log("parent clicked ");
// },true);

// child.addEventListener("click",e=>{
//     console.log("child clicked ");
// },true);

//stop bubbling by usong stop propagation()
// let grandparent = document.getElementById("grandparent");
// let parent =  document.getElementById("parent");
// let child = document.getElementById("child");

// grandparent.addEventListener("click",e=>{
//     e.stopPropagation();
//     console.log("grandparent clicked ");
// }),true;

// parent.addEventListener("click",e=>{
//     e.stopPropagation();
//     console.log("parent clicked ");
// }),true;

// child.addEventListener("click",e=>{
//     e.stopPropagation();
//     console.log("child clicked ");
// }),true;




//remove dom elements

let ul=document.getElementById("ul");
ul.addEventListener("click",e=>{
    console.log(e.targert);
    e.target.remove();
})






















