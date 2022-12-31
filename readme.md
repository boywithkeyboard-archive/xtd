## xtd

### copyDir

```ts
// copy directory (ignores .git folder)
import { copyDir } from 'https://deno.land/x/xtd@v0.1.1/copyDir.ts'
```

### files

```ts
// loop through files
import { join } from 'https://deno.land/std@v0.170.0/path/mod.ts'
import { files } from 'https://deno.land/x/xtd@v0.1.1/files.ts'

for await (const filePath of files(join(Deno.cwd(), './directory'))) {
  // do something
}
```
