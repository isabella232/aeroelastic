/**
 * Mock assets
 */

const horizontalCenterIcon = 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIEdlbmVyYXRvcjogSWNvTW9vbi5pbyAtLT4NCg0KPHN2Zw0KICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIg0KICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIGlkPSJzdmcyIg0KICAgZGF0YS10YWdzPSJyZW1vdmUtY2lyY2xlLCBjYW5jZWwsIGNsb3NlLCByZW1vdmUsIGRlbGV0ZSINCiAgIGhlaWdodD0iMTIwMCINCiAgIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiDQogICB3aWR0aD0iMTIwMCINCiAgIHZlcnNpb249IjEuMSINCiAgIGRhdGEtZHU9Iu+BnCINCiAgIGlua3NjYXBlOnZlcnNpb249IjAuNDguNCByOTkzOSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImFsaWduLWNlbnRlci5zdmciPg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczMwNzciIC8+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMSINCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCINCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiDQogICAgIGd1aWRldG9sZXJhbmNlPSIxMCINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiDQogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTUzNSINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODc2Ig0KICAgICBpZD0ibmFtZWR2aWV3MzA3NSINCiAgICAgc2hvd2dyaWQ9ImZhbHNlIg0KICAgICBpbmtzY2FwZTp6b29tPSIwLjI2MzM5Mjg2Ig0KICAgICBpbmtzY2FwZTpjeD0iLTY3Ljc5NjYwNiINCiAgICAgaW5rc2NhcGU6Y3k9IjU5OS44NjQ0MSINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjY1Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjQiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiIC8+DQogIDxtZXRhZGF0YQ0KICAgICBpZD0ibWV0YWRhdGE2MiI+DQogICAgPHJkZjpSREY+DQogICAgICA8Y2M6V29yaw0KICAgICAgICAgcmRmOmFib3V0PSIiPg0KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4NCiAgICAgICAgPGRjOnR5cGUNCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4NCiAgICAgICAgPGRjOnRpdGxlIC8+DQogICAgICA8L2NjOldvcms+DQogICAgPC9yZGY6UkRGPg0KICA8L21ldGFkYXRhPg0KICA8cGF0aA0KICAgICBzdHlsZT0iZm9udC1zaXplOjEzNTMuOTAxOTc3NTRweDtmb250LXN0eWxlOml0YWxpYztsZXR0ZXItc3BhY2luZzowO3dvcmQtc3BhY2luZzowO2ZvbnQtZmFtaWx5OlNlcmlmIg0KICAgICBpZD0icGF0aDMzNDMiDQogICAgIGQ9Im0gMjkwLjYyNSw5OS4yMDIwMzkgMCwxNzguMDA2MTIxIDYxOC43NSwwIDAsLTE3OC4wMDYxMjEgLTYxOC43NSwwIHogbSAtMTY0LjA2MjUsMjc0LjUyOTk0MSAwLDE3OC4wMDYxIDk0Ni44NzUsMCAwLC0xNzguMDA2MSAtOTQ2Ljg3NSwwIHogbSAxMDcuODEyNSwyNzQuNTI5OTIgMCwxNzguMDA2MTEgNzMxLjI1LDAgMCwtMTc4LjAwNjExIC03MzEuMjUsMCB6IE0gMCw5MjIuNzkxODIgMCwxMTAwLjc5OCBsIDEyMDAsMCAwLC0xNzguMDA2MTggLTEyMDAsMCB6Ig0KICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPg0KPC9zdmc+DQo=")'
const horizontalLeftIcon = 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIEdlbmVyYXRvcjogSWNvTW9vbi5pbyAtLT4NCg0KPHN2Zw0KICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIg0KICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIGlkPSJzdmcyIg0KICAgZGF0YS10YWdzPSJyZW1vdmUtY2lyY2xlLCBjYW5jZWwsIGNsb3NlLCByZW1vdmUsIGRlbGV0ZSINCiAgIGhlaWdodD0iMTIwMCINCiAgIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiDQogICB3aWR0aD0iMTIwMCINCiAgIHZlcnNpb249IjEuMSINCiAgIGRhdGEtZHU9Iu+BnCINCiAgIGlua3NjYXBlOnZlcnNpb249IjAuNDguNCByOTkzOSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImFsaWduLWxlZnQuc3ZnIj4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMzMTQ1IiAvPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEiDQogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiDQogICAgIGdyaWR0b2xlcmFuY2U9IjEwIg0KICAgICBndWlkZXRvbGVyYW5jZT0iMTAiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIg0KICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE1MzUiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg0OCINCiAgICAgaWQ9Im5hbWVkdmlldzMxNDMiDQogICAgIHNob3dncmlkPSJmYWxzZSINCiAgICAgaW5rc2NhcGU6em9vbT0iMC4yNjMzOTI4NiINCiAgICAgaW5rc2NhcGU6Y3g9Ii02Ny43OTY2MDYiDQogICAgIGlua3NjYXBlOmN5PSI0NDgiDQogICAgIGlua3NjYXBlOndpbmRvdy14PSI2NSINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI0Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiAvPg0KICA8bWV0YWRhdGENCiAgICAgaWQ9Im1ldGFkYXRhNjIiPg0KICAgIDxyZGY6UkRGPg0KICAgICAgPGNjOldvcmsNCiAgICAgICAgIHJkZjphYm91dD0iIj4NCiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+DQogICAgICAgIDxkYzp0eXBlDQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+DQogICAgICAgIDxkYzp0aXRsZSAvPg0KICAgICAgPC9jYzpXb3JrPg0KICAgIDwvcmRmOlJERj4NCiAgPC9tZXRhZGF0YT4NCiAgPHBhdGgNCiAgICAgc3R5bGU9ImZvbnQtc2l6ZToxMzUzLjkwMTk3NzU0cHg7Zm9udC1zdHlsZTppdGFsaWM7bGV0dGVyLXNwYWNpbmc6MDt3b3JkLXNwYWNpbmc6MDtmb250LWZhbWlseTpTZXJpZiINCiAgICAgaWQ9InBhdGgzNDQzIg0KICAgICBkPSJtIDYxOC43NSw5OS4yMDIwMzkgMCwxNzguMDA2MTIxIC02MTguNzUsMCAwLC0xNzguMDA2MTIxIDYxOC43NSwwIHogbSAzMjguMTI1LDI3NC41Mjk5NDEgMCwxNzguMDA2MSAtOTQ2Ljg3NSwwIDAsLTE3OC4wMDYxIDk0Ni44NzUsMCB6IE0gNzMxLjI1LDY0OC4yNjE5IGwgMCwxNzguMDA2MTEgLTczMS4yNSwwIDAsLTE3OC4wMDYxMSA3MzEuMjUsMCB6IG0gNDY4Ljc1LDI3NC41Mjk5MiAwLDE3OC4wMDYxOCAtMTIwMCwwIDAsLTE3OC4wMDYxOCAxMjAwLDAgeiINCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4NCjwvc3ZnPg0K")'
const horizontalRightIcon = 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIEdlbmVyYXRvcjogSWNvTW9vbi5pbyAtLT4NCg0KPHN2Zw0KICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIg0KICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIGlkPSJzdmcyIg0KICAgZGF0YS10YWdzPSJyZW1vdmUtY2lyY2xlLCBjYW5jZWwsIGNsb3NlLCByZW1vdmUsIGRlbGV0ZSINCiAgIGhlaWdodD0iMTIwMCINCiAgIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiDQogICB3aWR0aD0iMTIwMCINCiAgIHZlcnNpb249IjEuMSINCiAgIGRhdGEtZHU9Iu+BnCINCiAgIGlua3NjYXBlOnZlcnNpb249IjAuNDguNCByOTkzOSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImFsaWduLXJpZ2h0LnN2ZyI+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMzE3OSIgLz4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxIg0KICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIg0KICAgICBncmlkdG9sZXJhbmNlPSIxMCINCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCINCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNTM1Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NDgiDQogICAgIGlkPSJuYW1lZHZpZXczMTc3Ig0KICAgICBzaG93Z3JpZD0iZmFsc2UiDQogICAgIGlua3NjYXBlOnpvb209IjAuMjYzMzkyODYiDQogICAgIGlua3NjYXBlOmN4PSItNjcuNzk2NjA2Ig0KICAgICBpbmtzY2FwZTpjeT0iNDQ4Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNjUiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSIyNCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgLz4NCiAgPG1ldGFkYXRhDQogICAgIGlkPSJtZXRhZGF0YTYyIj4NCiAgICA8cmRmOlJERj4NCiAgICAgIDxjYzpXb3JrDQogICAgICAgICByZGY6YWJvdXQ9IiI+DQogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0Pg0KICAgICAgICA8ZGM6dHlwZQ0KICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPg0KICAgICAgICA8ZGM6dGl0bGUgLz4NCiAgICAgIDwvY2M6V29yaz4NCiAgICA8L3JkZjpSREY+DQogIDwvbWV0YWRhdGE+DQogIDxwYXRoDQogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiDQogICAgIGQ9Im0gNTgxLjI1LDk5LjIwMjAzOSAwLDE3OC4wMDYxMjEgNjE4Ljc1LDAgMCwtMTc4LjAwNjEyMSAtNjE4Ljc1LDAgeiBtIC0zMjguMTI1LDI3NC41Mjk5NDEgMCwxNzguMDA2MSA5NDYuODc1LDAgMCwtMTc4LjAwNjEgLTk0Ni44NzUsMCB6IG0gMjE1LjYyNSwyNzQuNTI5OTIgMCwxNzguMDA2MTEgNzMxLjI1LDAgMCwtMTc4LjAwNjExIC03MzEuMjUsMCB6IE0gMCw5MjIuNzkxODIgMCwxMTAwLjc5OCBsIDEyMDAsMCAwLC0xNzguMDA2MTggLTEyMDAsMCB6Ig0KICAgICBpZD0icGF0aDM0OTEiIC8+DQo8L3N2Zz4NCg==")'
const cancelIcon = 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3UG9ydD0iMCAwIDEyIDEyIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZlcnNpb249IjEuMSINCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8bGluZSB4MT0iMSIgeTE9IjExIiANCiAgICAgICAgICB4Mj0iMTEiIHkyPSIxIiANCiAgICAgICAgICBzdHJva2U9ImJsYWNrIiANCiAgICAgICAgICBzdHJva2Utd2lkdGg9IjIiLz4NCiAgICA8bGluZSB4MT0iMSIgeTE9IjEiIA0KICAgICAgICAgIHgyPSIxMSIgeTI9IjExIiANCiAgICAgICAgICBzdHJva2U9ImJsYWNrIiANCiAgICAgICAgICBzdHJva2Utd2lkdGg9IjIiLz4NCjwvc3ZnPg==")'
const pattern1 = 'url("data:image/png;base64,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")'
const pattern2 = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAklJREFUeNqEVtlqVEEQ7a7bk0UFF4y+KBiXV8Fn/9rv8MEvSAgoKEIiuMTMnem2KpwKZyo1Y8PhzvRSe53uOsZ4VUoZwKRYK2rZHL4uYa4n+xutV59Y0+EVFgb+V9o8SJAL31fch3E2/iiuyKDrb8MGFsqCefi+FYx7rnhIClzGpeKz4qefqRqu17CsBDdHsF6g4EDxBt85KOBwnSrO7b9QTHsiVCiUHfteKhaKZYiA75thzAvFPZMvSVLZi0oKzZgjxV0IGQTP0SCD7cwztnaQpZxc9s72PYICDhF7w+GeYdChUD4kJJo9WyNEeyQkFkYJnvs45HgP+h2TWZOeqVv66ZbiBq09KeM4eqj/8R8FLmctlAvZocDL9yqEIttbEF437FKSUGwLj+EbNV/dETZBDi9cyUgoY5Bn3GR26DsKoAePprDXvP5i8y2pqonqXkJp2toZ5h5TWLjX9sBhJyjjyWjleAspZgRZyQDjrSdWorS+grdfucFbsGQbSfawNkHYD8ho2D9Tt0skMwn134NHzAqubEFzy5D0iWU16ug5dOwiNKiEyuuBlmpo5JtoNMTRFt+C0Owe+KT4TYoip3FIe1BUIw9a4p/q973iHdxuiPUHuqB6YAZJSFISg2463pj1GGU34/sAc3PCVyUpFgmKN66LlvAPu+yYyAsuCH949F3hEpTiCbjfGukO5s5wxdbkOpAgbApFsuF1w4vjo+IvEv8LiV8SfdTkxRIfGJJcXtdnveMH3XgdVSXJWyuWaEneYreu8H8CDACRPfht+odEKwAAAABJRU5ErkJggg==")'
const pattern3 = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC")'
