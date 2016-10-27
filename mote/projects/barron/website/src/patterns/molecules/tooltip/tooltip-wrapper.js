let Tether = require('tether/dist/js/tether.js');
let Drop = require('tether-drop/dist/js/drop.js');

let tooltips = document.querySelectorAll('.Tooltip-content');

for (let i = 0; i < tooltips.length; i++) {
    spinOnSelector(tooltips[i]);
}

function spinOnSelector(item) {
    let counter = 0;
    let interval = setInterval(function() {
        counter += 1;
        // check if the target exists && check if the data exists
        if ((document.querySelector(item.getAttribute('data-tooltip-target')) != null) && (Barron[item.getAttribute('data-tooltip-config')] != null)) {
            clearInterval(interval);

            let target = document.querySelector(item.getAttribute('data-tooltip-target'));
            let content = item;
            let config = Barron[item.getAttribute('data-tooltip-config')];

            config.desktopOptions.target = target;
            config.desktopOptions.content = content;

            config.mobileOptions.target = target;
            config.mobileOptions.content = content;

            let drop = addTooltip(config.desktopOptions, config.mobileOptions, config.breakpoint);
            if (config.trigger) {
                drop[config.trigger]();
            }
        } else if (counter > 100) {
            clearInterval(interval);
        }
    }, 200);
}


function addTooltip(options, mobileOptions, breakpoint) {
    let w = window.innerWidth;
    let initConfig;
    if (w < breakpoint) {
        initConfig = mobileOptions;
    } else {
        initConfig = options;
    }

    let dropInstance = new Drop(initConfig);
    let closer = initConfig.content.querySelector('.Tooltip-closer');
    if (closer) {
        closer.onclick = function() {
            dropInstance.close();
        };
    }
    return dropInstance;
}

module.exports = addTooltip;
