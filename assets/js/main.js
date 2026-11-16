(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var ls=$('lt-s');if(ls){var lw=$('lt-w');
 on([ls,lw],function(){var s=ls.value,soak=lw.value==='soak',t,d,c;
  if(s==='nap'){t='Suede or nubuck';d='A brushed leather with a raised nap. Fine, short nap suggests nubuck; a softer, shaggier feel suggests suede.';c=['Brush with a suede brush, in one direction','Use a protective spray made for napped leather','Never use cream, wax or a damp cloth'];}
  else if(s==='gloss'){t='Patent leather';d='Leather sealed with a high-gloss lacquer coat.';c=['Wipe with a soft damp cloth and dry at once','Store apart from other bags; it can pick up their colour','No conditioner needed'];}
  else if(s==='cross'){t='Saffiano or coated leather';d='A pressed cross-hatch grain sealed with wax or resin. Very resistant to scratches and rain.';c=['Wipe with a barely damp cloth','No conditioner needed on the coated surface','Condition only untreated handles or trims'];}
  else if(s==='pebble'){t=soak?'Natural pebbled (shrunken grain) leather':'Pigmented pebbled leather';d=soak?'The grain is natural and the surface is only lightly sealed, so it absorbs moisture.':'An embossed, sealed surface that hides marks well and suits daily use.';c=soak?['Keep out of heavy rain','Condition three times a year','Clean with a dry or barely damp cloth']:['Wipe with a barely damp cloth','Condition twice a year','Ideal for everyday and travel'];}
  else{t=soak?'Aniline full-grain leather':'Semi-aniline or lightly finished leather';d=soak?'Unsealed, with the natural surface intact. It will darken and gain a patina with handling.':'Natural-looking leather with a thin protective coat.';c=soak?['Protect from rain and oily hands at first','Condition three to four times a year','Expect and enjoy gradual darkening']:['Wipe spills quickly; they will not soak in at once','Condition two to three times a year','Test any cleaner on a hidden area'];}
  $('lt-o').innerHTML='<strong>'+t+'</strong><p>'+d+'</p><ul>'+c.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul>';});}
var ss=$('sa-s');if(ss){var sl=$('sa-l');
 var A={water:{finished:['Wipe dry with a soft cloth','Let it air dry; marks rarely remain on coated leather'],aniline:['Dampen a clean cloth and wipe the whole panel evenly, seam to seam','Stuff with paper and dry for 24 hours at room temperature','Condition lightly once fully dry'],suede:['Blot, do not rub','Let it dry completely away from heat','Brush the nap back up with a suede brush'],no:'Never use a hairdryer or radiator.'},
  oil:{finished:['Blot with a dry cloth','Wipe with a little leather cleaner on a soft cloth'],aniline:['Blot the excess','Cover with cornflour or plain talc and leave overnight','Brush off gently; repeat if a shadow remains'],suede:['Blot the excess','Cover with cornflour overnight, then brush away','Lift the nap with a suede brush'],no:'Do not add water; it sets the grease.'},
  ink:{finished:['Act while it is fresh','Use a leather ink-remover stick exactly as directed, on a hidden area first'],aniline:['Do not attempt home removal','Take it to a leather specialist as soon as you can'],suede:['Do not wet it','Consult a specialist; home methods spread the ink'],no:'Never use nail-varnish remover, solvents or hairspray.'},
  makeup:{finished:['Lift solids with the edge of a card','Wipe with a barely damp cloth and a drop of leather cleaner, outside inward'],aniline:['Lift solids with the edge of a card','Dab, do not rub, with a dry cloth','Use a cleaner made for aniline leather, tested first'],suede:['Let it dry fully','Rub gently with a suede eraser block','Brush the nap back up'],no:'Avoid make-up remover and baby wipes.'},
  dye:{finished:['Treat early','Wipe with leather cleaner on a soft white cloth','Apply a protector afterwards'],aniline:['Home treatment rarely works on unsealed leather','Ask a specialist cleaner'],suede:['Try a suede eraser block very gently','If the shadow stays, see a specialist'],no:'Do not scrub; you will remove the bag’s own colour.'},
  mould:{finished:['Brush off outdoors with a soft dry brush','Wipe with a cloth lightly dampened with clean water','Dry in moving air and store somewhere dry'],aniline:['Brush off outdoors with a soft dry brush','Wipe very lightly with a barely damp cloth','Dry thoroughly, then condition'],suede:['Brush off outdoors once fully dry','Air for a full day','Use a suede brush to restore the nap'],no:'Do not seal a damp bag in plastic.'}};
 on([ss,sl],function(){var a=A[ss.value];$('sa-o').innerHTML='<strong>First steps</strong><ol>'+a[sl.value].map(function(x){return '<li>'+x+'</li>';}).join('')+'</ol><p class="lx-no">'+a.no+'</p><p>If two gentle attempts do not work, stop and ask a leather specialist.</p>';});}
var wn=$('wk-n');if(wn){var ws=$('wk-s'),wx=$('wk-x');
 on([wn,ws,wx],function(){var n=Math.min(10,Math.max(1,parseInt(wn.value,10)||1)),cold=ws.value==='cold',x=parseInt(wx.value,10),l=Math.round(12+n*(cold?8:5.5)+x*5),t,d;
  if(l<=28){t='Large tote or small holdall';d='about 45 x 25 x 20 cm';}else if(l<=42){t='Classic weekender';d='about 50 x 28 x 25 cm';}else if(l<=58){t='Large weekender or cabin duffel';d='about 55 x 30 x 28 cm';}else{t='Travel duffel or small suitcase';d='about 65 x 35 x 30 cm';}
  $('wk-o').innerHTML='<strong>'+l+' litres</strong><p>'+t+', '+d+'.</p><ul><li>'+(l<=42?'Fits under most seats or in an overhead locker.':'Check airline cabin limits before flying with this size.')+'</li><li>'+(cold?'Wear your coat and heaviest shoes to travel.':'Roll soft items to save space.')+'</li><li>Choose a bag with a shoulder strap if it will weigh over 6 kg packed.</li></ul>';});}
})();
