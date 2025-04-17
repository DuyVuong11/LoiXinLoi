// Thay đổi nội dung búc thư ở đây
var letterContent ="Anh xin lỗi vì anh đã nhiều lần làm em buồn, làm em khó chịu, nhưng anh mong em hãy hiểu cho anh, anh có chút áp lực nên anh lại làm em buồn. Anh mong em cho anh cơ hội được nắm tay em 1 lần nữa, được cùng em làm nhiều thứ hơn, anh cũng sẽ không cho qua những ngày đặc biệt của tụi mình, anh cũng kh đòi em bất cứ cái gì cả, anh đi làm đều đặn và cũng sẽ cân bằng thời gian việc học và việc làm, anh sẽ dành thời gian cho em nhiều nhất. Em cho anh 1 cơ hội được theo đuổi em có được không, anh sẽ cố gắng hết mình, lấy lòng ba mẹ ông bà họ hàng của em, anh hứa anh sẽ thực hiện được, em có thể nhận tình cảm từ anh, cho anh được quan tâm chăm sóc em em sẽ cảm nhận được từ anh mà, anh thực sự mong em cho anh 1 cơ hội nữa để anh được thể hiện mình, nhiều ngày qua anh chỉ suy nghĩ những điều mình sẽ làm được, anh xin lỗi vì kh làm nó sớm hơn, em cho anh 1 cơ hội nữa nha, tối nay anh có thể qua để gặp em mình nch với nhau có được không ạ, anh nhớ em nhiều lắm, anh rất yêu em💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})