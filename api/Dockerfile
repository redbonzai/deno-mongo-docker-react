FROM denoland/deno:1.16.2

RUN deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon/denon.ts

WORKDIR /usr/app
ADD . .

COPY deps.ts .
RUN deno cache --reload --unstable deps.ts

ADD . .

ENTRYPOINT ["/usr/local/bin/denon"]
