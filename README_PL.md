# Komponent vue3Tooltip dla vue3 obsługujący dymki (tooltipy) z opisem danego elementu.

W konfiguracji komponentu można ustawić:
![basic usage](./images/config_image.png)
- jaki atrybut elementu mamy traktować jako treść/kod do umieszczenia w tooltipie.
   -- title
   -- description
   -- jakikolwiek atrybut elementu
  
- na jaki event ma reagować komponent:  
  -- mouseenter- dymek wygeneruje się raz i pozostanie na swoim miejscu, po opuszczeniu elementu dymek zniknie
  -- mousemove- dymek będzie podążał za kurorem myszki, po opuszczeniu elementu dymek zniknie 

W dymku można zastosować prosty html, ale i dodać zdjęcie, zbudować tabelę w dymku (odpowiednio formatując treść atrybutu title).

Przykład:

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
![basic usage](./images/image.png)

Tooltip ten podąża za kursorem myszki, dynamicznie pozycjonuje się na ekranie, jeśli nie zmieści się na górze- to pokazuje się pod elementem.

Dla  tooltipów można swobodnie zastosować wszystkie style.

Mam nadzieję ze komuś sie przyda taki komponencik :)
Sam szukałem, zainstalowałem wiele innych ale nie były satysfakcjonujące dla mnie- stąd potrzeba utworzenia czegoś takiego.
