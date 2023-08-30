var jsonData = localStorage.getItem('formData');
if(jsonData){
    var formData = JSON.parse(jsonData);
    var formTitle = formData.formTitle;
    
    document.title = formTitle;
    
    var formTitleElement = document.getElementById("form-title");
    if (formTitleElement) {
        formTitleElement.textContent = formTitle;
    }
}

document.getElementById("new-form").addEventListener("click", function() {
    localStorage.clear();
    window.location.href = '/index.html';
});

var formData = localStorage.getItem('formData');

console.log(formData);
function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  function onDownload(){
      download(formData, "form.json", "text/plain");
  }
document.getElementById('download-form').addEventListener('click', function(){
    event.preventDefault();
    onDownload();
    // console.log(formData)
});

document.getElementById("new-form").addEventListener("click", function() {
    event.preventDefault();
    localStorage.clear();
    window.location.href = '/index.html';
});