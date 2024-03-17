// Configuration for tooltip
const config = {
  tooltipAttribute: 'title' // Attribute used for displaying text in the tooltip.
  event: 'mousemove' // Event on which the tooltip is triggered.
};

export const TooltipDirective = {
    mounted(el) {
        let tooltipText = el.getAttribute(config.tooltipAttribute);
        const tooltipContainer = document.getElementById('infoTooltip');
        el.addEventListener(config.event, function() {
            tooltipContainer.textContent = tooltipText;
            el.removeAttribute(config.tooltipAttribute);
            if (tooltipContainer) {
                const rect = el.getBoundingClientRect();
                const top = rect.top + window.scrollY + rect.height + 4;
                const left = rect.left + window.scrollX;
                tooltipContainer.style.top = top + 'px';
                tooltipContainer.style.left = left + 'px';
                tooltipContainer.style.display = 'block';
            }
        });

        el.addEventListener('mouseleave', function() {
            tooltipContainer.textContent = '';
            tooltipContainer.style.display = 'none';
            el.setAttribute(config.tooltipAttribute, tooltipText);
        });
    }
};
