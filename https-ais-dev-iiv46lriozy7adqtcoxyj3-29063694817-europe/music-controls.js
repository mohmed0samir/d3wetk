/* Dedicated mute control; volume remains independently adjustable. */
document.addEventListener('DOMContentLoaded',()=>{let muted=false;$('#muteButton').onclick=()=>{muted=!muted;if(audioGain)audioGain.gain.value=muted?0:$('#volume').value;$('#muteButton').textContent=muted?'⌁̸':'⌁';$('#muteButton').setAttribute('aria-label',muted?'إلغاء كتم الصوت':'كتم الصوت')}});
