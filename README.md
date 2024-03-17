# Komponent vue3Tooltip dla vue3 obsługujący dymki (tooltipy) z opsiem danego elementu.

W dymku można zastosować prosty html, ale i dodać zdjęcie, zbudowac tabelę w dymku (odpowiednio formatując treść atrybutu title).

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

Wprowadzenie takiego kodu wyświetli nam taki tooltip:
![basic usage](./images/image.png)
