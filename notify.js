const notify = (() => {

    const shadowColor = 'rgba(171, 171, 171, 0.5)'
    const me = (success = true, msg, title = success ? 'Congratulations' : 'Error', delay = 6000) => {
        const container = document.querySelector('#notificationContainer')
        if (!container) return;

        const el = document.createElement('div')
        el.innerHTML = `
        <div style="display:flex; background-color:white;padding:10px 10px 5px 10px; border-bottom:1px solid ${shadowColor.replace('0.5', '0.3')};">
            <div style="display:flex; width:15%; margin-right:10px; border-radius:5px; background-color:${success ? "#198754" : "#dc3545"};"></div>
            <div><strong>${title}</strong></div>
        </div> 
        <div style="display:flex; padding-top:10px; background-color:rgba(255,255,255,0.98);padding:5px 10px 10px 10px;">
            <div style="display:flex; width:85%; align-items:center;font-size:0.95em;">${msg}</div>
            <button style="display:flex; width:15%; justify-content:center; align-items:center; font-size:1.2rem;border:none; background-color:transparent; cursor:pointer;" 
            type="button" aria-label="Close">&#x2715</button>
        </div>
        `

        const style = el.style
        style.margin = "15px"
        style.display = 'flex'
        style.flexDirection = 'column'
        style.maxWidth = "250px"
        style.borderRadius = "5px"
        style.boxShadow = `0px 0px 10px 1px ${shadowColor}`
        el.style.transition = 'all .25s ease-in-out'
        el.style.opacity = '0'
        el.style.zIndex = '10000 !important'

        el.querySelector('button').addEventListener('click', (e) => e.target.parentElement.parentElement.remove())
        container.append(el)
        setTimeout(() => { el.style.opacity = '1' }, 1)

        if (delay)
            setTimeout(() => el ? el.remove() : null, delay)
    }


    return { me }
})();