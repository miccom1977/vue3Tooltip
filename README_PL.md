# Komponent vue3Tooltip dla vue3 obsługujący dymki (tooltipy) z opisem danego elementu.

W konfiguracji komponentu można ustawić:<br>
```js
// configuration tooltip
const config = {
    tooltipAttribute: 'title', // Attribute used for displaying text in the tooltip.
    event: 'mousemove' // Event on which the tooltip is triggered.
};
```
- jaki atrybut elementu mamy traktować jako treść/kod do umieszczenia w tooltipie.<br>
   -- title<br>
   -- description<br>
   -- jakikolwiek atrybut elementu<br><br>
  
- na jaki event ma reagować komponent:  <br>
  -- mouseenter- dymek wygeneruje się raz i pozostanie na swoim miejscu, po opuszczeniu elementu dymek zniknie<br>
  -- mousemove- dymek będzie podążał za kurorem myszki, po opuszczeniu elementu dymek zniknie<br>
  -- inne eventy, nie testowane ale powinny zadziałać poprawnie <br><br>

W dymku można zastosować prosty html, ale i dodać zdjęcie, zbudować tabelę w dymku (odpowiednio formatując treść atrybutu title).<br><br>

Przykład:<br>

```vue
<template>
  <button title="my <strong>html</strong><br>new line in tooltip">miccom</button>
</template>
<script>
import { TooltipDirective } from "@/directives/TooltipDirective.js";

export default {
    name: 'ExampleComponent',
    directives: {
        Tooltip: TooltipDirective
    }
};
</script>
<style>
</style>
```

Wprowadzenie takiego kodu wyświetli nam taki tooltip:<br>
![basic usage](./images/image.png)<br><br>

Tooltip ten podąża za kursorem myszki (przy ustawieniu mousemove), dynamicznie pozycjonuje się na ekranie, jeśli nie zmieści się na górze- to pokazuje się pod elementem.<br>

Dla  tooltipów można swobodnie zastosować wszystkie style.<br><br>

Mam nadzieję że komuś przyda się taki komponencik :)<br>
Sam szukałem, zainstalowałem wiele innych ale nie były satysfakcjonujące dla mnie- stąd potrzeba utworzenia czegoś takiego.<br><br>
