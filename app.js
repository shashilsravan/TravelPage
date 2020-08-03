const sideNav = document.querySelector('.sidenav')
const slider = document.querySelectorAll('.slider');
const ac = document.querySelectorAll('.autocomplete')
const mb = document.querySelectorAll('.materialboxed');
const ss = document.querySelectorAll('.scrollspy');

document.addEventListener('DOMContentLoaded', function(){
    M.Materialbox.init(mb, {});
    M.Sidenav.init(sideNav, {draggable:true, inDuration:1000, outDuration:1000})
    M.Slider.init(slider, {indicators:false, interval:3000})
    M.Autocomplete.init(ac, {
        data:{
            'Pune':null,
            'Rajahmundry':null,
            'Nuzvid':null,
            'Vijaywada':null,
            'Chennai':null,
            'Kolkata':null,
            'Banglore':null,
            'Rajasthan':null,
            'Thane':null,
            'Delhi':null,
            'Mumbai':null,
            'Vizag':null,
        }
    })
})

function navClose(){
    var instance = M.Sidenav.getInstance(sideNav);
    instance.close()
}