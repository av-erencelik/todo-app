export function displayDropdown() {
    const dropdown = document.getElementById('dropdown-items')
    const updown = document.getElementById('updown')
    if(dropdown.style.height != 'fit-content') {
        dropdown.style.height = `${dropdown.childElementCount * 2}rem`
        updown.style.rotate = '180deg'
        setTimeout(function() {
            dropdown.style.height = 'fit-content'
          }, 500)
    }else {
        dropdown.style.height = `${dropdown.childElementCount * 2}rem`
        updown.style.rotate = '0deg'
        setTimeout(function() {
            dropdown.style.height = '0'
          }, 100)

    }
    
}
export function displaySidebar() {
    const sidebar = document.getElementById('sidebar')
    if(sidebar.style.left === '-24rem') {
        sidebar.style.width = "10rem"
        sidebar.style.left = '0rem'
        console.log(1)
    }else {
        sidebar.style.width = '0rem'
        sidebar.style.left = '-24rem'
        console.log(0)
    }
}