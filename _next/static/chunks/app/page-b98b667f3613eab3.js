(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    47096: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 36341)),
        Promise.resolve().then(s.bind(s, 2794));
    },
    36341: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => U });
      var a = s(95155),
        r = s(12115),
        l = s(88629),
        n = s(84403),
        c = s(38157);
      class i {
        async list() {
          return c.i.get("/currency/list");
        }
        async course(e, t) {
          return c.i.get("/currency/course/exchange-rate", {
            params: { crypto_sale_id: e, crypto_purchase_id: t },
          });
        }
      }
      let o = new i();
      var d = s(99827),
        u = s(60709);
      let m = (0, d.v)(
          (0, u.Zr)(
            (e) => ({
              cryptoList: [],
              setCryptoList: (t) => e({ cryptoList: t }),
            }),
            { name: "crypto" }
          )
        ),
        x = (0, d.v)((e) => ({
          errors: {},
          setErrors: (t) => e({ errors: t }),
        })),
        p = (0, d.v)((e) => ({
          saleAmount: "",
          setSaleAmount: (t) => e({ saleAmount: t }),
          purchaseAmount: "",
          setPurchaseAmount: (t) => e({ purchaseAmount: t }),
          editingFieldAmount: null,
          setEditingFieldAmount: (t) => e({ editingFieldAmount: t }),
          createOrderBTN: !1,
          setCreateOrderBTN: (t) => e({ createOrderBTN: t }),
          loading: !1,
          setLoading: (t) => e({ loading: t }),
        })),
        h = (0, d.v)((e) => ({
          course: 0,
          setCourse: (t) => e({ course: t }),
        })),
        g = (0, d.v)((e) => ({
          saleCryptoSelect: null,
          setSaleCryptoSelect: (t) => e({ saleCryptoSelect: t }),
          purchaseCryptoSelect: null,
          setPurchaseCryptoSelect: (t) => e({ purchaseCryptoSelect: t }),
        }));
      var v = s(76046),
        b = s(65564);
      let f = (e) => {
        let { children: t } = e,
          { toast: s } = (0, b.dj)();
        (0, v.useRouter)();
        let { setCryptoList: a } = m(),
          { setErrors: c } = x(),
          {
            saleCryptoSelect: i,
            setSaleCryptoSelect: d,
            purchaseCryptoSelect: u,
            setPurchaseCryptoSelect: f,
          } = g(),
          {
            saleAmount: j,
            setSaleAmount: y,
            purchaseAmount: N,
            setPurchaseAmount: w,
            editingFieldAmount: C,
            setEditingFieldAmount: _,
            createOrderBTN: k,
            setCreateOrderBTN: E,
            setLoading: S,
          } = p(),
          { course: F, setCourse: A } = h(),
          {
            data: L = [],
            isLoading: z,
            isError: M,
            refetch: O,
          } = (0, l.I)({
            queryKey: ["crypto-list"],
            queryFn: async () => {
              let e = (await o.list()).data.sort((e, t) =>
                "crypto" === e.type && "crypto" !== t.type
                  ? -1
                  : "crypto" !== e.type && "crypto" === t.type
                  ? 1
                  : e.name.localeCompare(t.min_receive.toString())
              );
              return a(e), d(e[0]), f(e[1]), [];
            },
            placeholderData: n.rX,
          });
        return (
          (0, r.useEffect)(() => {
            (async () => {
              i && u && A((await o.course(i.id, u.id)).data);
            })();
          }, [i, u]),
          (0, r.useEffect)(() => {
            F &&
              ("give" === C && j
                ? w((parseFloat(j) * F).toFixed(6))
                : "get" === C && N && y((parseFloat(N) / F).toFixed(6)),
              c({}));
          }, [j, N, F, C]),
          (0, r.useEffect)(() => {
            if (k && (E(!1), i && u)) {
              if (Number(j) < i.min_receive) {
                let e = {};
                (e.amountGive = "Минимальная сумма ".concat(i.min_receive)),
                  c(e);
              } else c({});
              E(!1);
            }
          }, [k]),
          t
        );
      };
      var j = s(52180),
        y = s(2218),
        N = s(30648),
        w = s(32476),
        C = s(37887),
        _ = s(38271),
        k = s(34367),
        E = s(46280);
      let S = (e) => {
        let { cryptoSelect: t, setCryptoSelect: s } = e,
          [l, n] = r.useState(!1),
          [c, i] = (0, r.useState)(""),
          { cryptoList: o } = m(),
          d = o.filter(
            (e) =>
              e.name.toLowerCase().includes(c.toLowerCase()) ||
              e.currency.toLowerCase().includes(c.toLowerCase())
          );
        return (0, a.jsxs)(w.y, {
          placement: "bottom-end",
          className: "md:w-[510px]",
          isOpen: l,
          onOpenChange: (e) => n(e),
          backdrop: "opaque",
          classNames: { content: "block bg-background" },
          children: [
            (0, a.jsx)(C.T, {
              children: (0, a.jsxs)(y.T, {
                className: "bg-white bg-opacity-5",
                children: [
                  (0, a.jsx)("img", {
                    src: "/crypto/icons/".concat(null == t ? void 0 : t.image),
                    alt: "",
                    className: "min-w-5 min-h-5",
                  }),
                  (0, a.jsx)("div", {
                    className: "text-sm text-white",
                    children: null == t ? void 0 : t.currency,
                  }),
                  (0, a.jsx)(k.pte, {
                    className:
                      "text-base min-w-4 min-h-4 text-white text-opacity-30",
                  }),
                ],
              }),
            }),
            (0, a.jsx)(_.C, {
              children: (0, a.jsxs)("div", {
                className: "mt-2",
                children: [
                  (0, a.jsx)("div", {
                    className: "",
                    children: (0, a.jsx)(j.r, {
                      labelPlacement: "outside",
                      placeholder: "Поиск по названию",
                      startContent: (0, a.jsx)(E.zfp, {
                        className:
                          "text-2xl text-default-400 pointer-events-none flex-shrink-0",
                      }),
                      type: "text",
                      value: c,
                      className: "",
                      classNames: {
                        input: " group-data-[has-value=true]:text-white",
                        inputWrapper:
                          "bg-transparent text-white data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent border-1 border-transparent data-[hover=true]:border-white  group-data-[focus=true]:border-white",
                      },
                      onValueChange: i,
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "flex flex-col gap-1 h-[300px] max-h-[300px] overflow-auto mt-6",
                    children: d.map((e, r) =>
                      (0, a.jsx)("div", {
                        className:
                          "flex items-center justify-between gap-3 p-2 hover:bg-[#191919] rounded-lg  ".concat(
                            t == e ? "bg-[#191919]" : " cursor-pointer"
                          ),
                        onClick: () => {
                          s(e), n(!1);
                        },
                        children: (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/crypto/icons/".concat(e.image),
                              alt: "СБП",
                              className: "h-10 w-10",
                            }),
                            (0, a.jsx)("span", {
                              className: "text-base",
                              children: e.name,
                            }),
                          ],
                        }),
                      })
                    ),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var F = s(2725),
        A = s(33371),
        L = s(41062),
        z = s(81597),
        M = s(27657),
        O = s(93248),
        P = s(20309),
        T = s(30227);
      class W {
        async create_order_step_first(e, t) {
          return c.i.post("/order/bulk/steps/create-order/step-1", {
            order: e,
            device: t,
          });
        }
        async create_order_step_second(e, t) {
          return c.i.post("/order/bulk/steps/create-order/step-2", {
            order: e,
            device: t,
          });
        }
        async create_order(e, t) {
          return c.i.post("/order/bulk/create-order", { order: e, device: t });
        }
      }
      let R = new W();
      var V = s(77648);
      let Z = async () => {
          let e = await V.Ay.load();
          return (await e.get()).visitorId;
        },
        B = async () => {
          let e = await fetch("https://ipinfo.io/json?token=6eb7e1e1120e59");
          return await e.json();
        },
        D = () => {
          let e = document.createElement("canvas"),
            t = e.getContext("webgl") || e.getContext("experimental-webgl");
          if (!t || !(t instanceof WebGLRenderingContext)) return "Unknown";
          let s = t.getExtension("WEBGL_debug_renderer_info");
          return s ? t.getParameter(s.UNMASKED_RENDERER_WEBGL) : "Unknown";
        },
        G = () => {
          let e = navigator.userAgent.toLowerCase();
          return /mobile|android|iphone|ipad/.test(e) ? "mobile" : "desktop";
        },
        q = async () => {
          let e = await B();
          return {
            ip_address: e.ip,
            city: e.city,
            region: e.region,
            country: e.country,
            fingerprint: await Z(),
            gpu: D(),
            user_agent: navigator.userAgent,
            device_type: G(),
          };
        };
      var I = s(51747);
      let K = (e) => {
          let {
              email: t,
              setEmail: s,
              phone: l,
              setPhone: n,
              address: c,
              setAddress: i,
              addressDesttag: o,
              setAddressDesttag: d,
              check: u,
              setCheck: m,
            } = e,
            { saleCryptoSelect: x, purchaseCryptoSelect: h } = g();
          if (!h || !x) return;
          let { saleAmount: v, purchaseAmount: b } = p(),
            f = (e) => e.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
          r.useMemo(() => "" !== t && !f(t), [t]);
          let y = (e) => e.match(/^[+]?[\d\s\-()]{10,15}$/);
          r.useMemo(() => "" !== l && !y(l), [l]);
          let N = new RegExp(h.regex),
            w = (e) => e.match(N),
            C = r.useMemo(() => "" !== c && !w(c), [c]);
          return (
            (0, r.useEffect)(() => {
              let e = () => {
                (document.body.style.transform = "scale(1)"),
                  (document.body.style.transformOrigin = "top left"),
                  (document.body.style.width = "100vw"),
                  setTimeout(() => {
                    window.scrollTo(0, 0),
                      (document.documentElement.style.zoom = "1");
                  }, 100);
              };
              return (
                document.addEventListener("focusout", e),
                () => {
                  document.removeEventListener("focusout", e);
                }
              );
            }, []),
            (0, a.jsxs)("div", {
              className: "max-sm:px-4 flex flex-col gap-4 input-text-base",
              children: [
                (0, a.jsxs)("div", {
                  className: " flex bg-accent bg-opacity-60 rounded-2xl ",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "rounded-2xl bg-background flex flex-col gap-2 p-4 w-full text-back",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-sm font-bold",
                          children: "Отдаете",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-1",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/crypto/icons/".concat(
                                null == x ? void 0 : x.image
                              ),
                              alt: "icon",
                              className: "max-w-8",
                            }),
                            (0, a.jsx)("span", {
                              className: "text-xs",
                              children: null == x ? void 0 : x.name,
                            }),

                          ],
                        }),
                        (0, a.jsx)("hr", {}),
                        (0, a.jsx)("span", {
                          className: "text-sm font-bold",
                          children: "Сумма",
                        }),
                        (0, a.jsxs)("span", {
                          className: "text-sm font-bold",
                          children: [v, " ", null == x ? void 0 : x.currency],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "rounded-2xl flex flex-col gap-2 p-4 w-full text-back",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-sm font-bold",
                          children: "Получаете",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-1",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/crypto/icons/".concat(
                                null == h ? void 0 : h.image
                              ),
                              alt: "icon",
                              className: "max-w-8",
                            }),
                            (0, a.jsx)("span", {
                              className: "text-xs",
                              children: null == h ? void 0 : h.name,
                            }),

                          ],
                        }),
                        (0, a.jsx)("hr", {}),
                        (0, a.jsx)("span", {
                          className: "text-sm font-bold",
                          children: "Сумма",
                        }),
                        (0, a.jsxs)("span", {
                          className: "text-sm font-bold",
                          children: [b, " ", null == h ? void 0 : h.currency],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "",
                  children: [
                    (0, a.jsx)("div", {
                      className: "font-semibold text-lg mb-3",
                      children: "Введите данные",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        (0, a.jsx)(j.r, {
                          color:
                            c.length > 0
                              ? C
                                ? "danger"
                                : "success"
                              : "default",
                          errorMessage: "Введите корректный адрес",
                          isInvalid: C,
                          label: "Кошелек",
                          type: "text",
                          value: c,
                          variant: "bordered",
                          size: "sm",
                          radius: "lg",
                          onValueChange: i,
                          classNames: {
                            inputWrapper:
                              "group-data-[focus=true]:border-accent",
                          },
                          onBlur: () =>
                            setTimeout(() => window.scrollTo(0, 0), 100),
                        }),
                        T.VS.includes(h.currency) &&
                          (0, a.jsx)(j.r, {
                            color: "default",
                            label: "MEMO (необязательно)",
                            type: "text",
                            size: "sm",
                            radius: "lg",
                            value: o,
                            variant: "bordered",
                            onValueChange: d,
                            classNames: {
                              inputWrapper:
                                "group-data-[focus=true]:border-accent",
                            },
                          }),
                        (0, a.jsx)(j.r, {
                          size: "sm",
                          radius: "lg",
                          label: "Email",
                          type: "email",
                          value: t,
                          variant: "bordered",
                          onValueChange: s,
                          classNames: {
                            inputWrapper:
                              "group-data-[focus=true]:border-accent",
                          },
                        }),
                        (0, a.jsx)(j.r, {
                          size: "sm",
                          radius: "lg",
                          errorMessage: "Введите корректный номер телефона",
                          label: "Номер телефона",
                          type: "phone",
                          value: l,
                          variant: "bordered",
                          onValueChange: n,
                          classNames: {
                            inputWrapper:
                              "group-data-[focus=true]:border-accent",
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "",
                  children: (0, a.jsxs)("div", {
                    className: "flex items-center gap-0.5",
                    children: [
                      (0, a.jsx)(F.A, {
                        isSelected: u,
                        onValueChange: m,
                        classNames: {
                          wrapper: "after:bg-accent",
                          icon: "text-black",
                        },
                      }),
                      (0, a.jsx)("div", {
                        className: "text-sm",
                        children: (0, a.jsxs)("span", {
                          children: [
                            "Я согласен(-а) с",
                            " ",
                            (0, a.jsx)("a", {
                              href: "/doc/rules",
                              className: "text-accent",
                              children: "правилами обмена",
                            }),
                            " ",
                            "и",
                            " ",
                            (0, a.jsx)("a", {
                              href: "/doc/aml-kyc",
                              className: "text-accent",
                              children: "AML/KYC policy",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        $ = () => {
          let e = (0, v.useRouter)(),
            { isOpen: t, onOpen: s, onClose: l, onOpenChange: n } = (0, A.j)(),
            { accountData: c } = (0, I.E)(),
            { saleCryptoSelect: i, purchaseCryptoSelect: o } = g(),
            { saleAmount: d, purchaseAmount: u } = p(),
            { setErrors: m } = x(),
            [b, f] = (0, r.useState)(""),
            [j, N] = (0, r.useState)(""),
            [w, C] = (0, r.useState)(""),
            [_, k] = (0, r.useState)(""),
            [E, S] = (0, r.useState)(!1),
            [F, T] = (0, r.useState)(!1),
            { course: W } = h();
          (0, r.useEffect)(() => {
            c && c.email && f(c.email);
          }, [c]);
          let V = async () => {
              if (!i || !o) return;
              let t = {
                  crypto_sale_id: i.id,
                  crypto_purchase_id: o.id,
                  email: b,
                  phone: j,
                  wallet: w,
                  memo: _,
                  amount_sale: Number(d),
                  amount_purchase: Number(u),
                  exchange_rate: W,
                },
                s = await q();
              T(!0);
              try {
                let a = (await R.create_order(t, s)).data;
                window.location.href = "/order/" + a.result;
                // window.open("/order/" + a.result, "_blank");
                // e.push("/order/" + a.result);
                return;
              } catch (t) {
                console.log(t), e.push("/");
              } finally {
                T(!1);
              }
            },
            Z = (e) => e.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
            B = r.useMemo(() => "" !== b && !Z(b), [b]),
            D = (e) => {
                let t = (e || "").replace(/\D/g, "");
                if (t.length < 10) return null;
                let a = ["1","39","38","49","44","65","81","82","972","971"];
                for (let n of a) if (t.startsWith(n)) return null;
                return t;
              },
            G = r.useMemo(() => "" !== j && !D(j), [j]),
            $ = o && new RegExp(o.regex),
            U = (e) => $ && e.match($),
            Y = r.useMemo(() => "" !== w && !U(w), [w]);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(y.T, {
                className:
                  "max-xl:bg-accent max-xl:border-none xl:border-accent text-background xl:text-[#F1FFC7] w-full min-h-16 text-2xl font-medium font-rimma-sans",
                radius: "lg",
                size: "lg",
                variant: "bordered",
                isLoading: F,
                onPress: () => {
                  if (i) {
                    if (Number(d) < i.min_receive) {
                      let e = {};
                      (e.amountGive = "Минимальная сумма ".concat(
                        i.min_receive
                      )),
                        m(e);
                    } else m({}), s();
                  }
                },
                style: { fontSize: "24px" },
                children: "Обменять",
              }),
              (0, a.jsx)(L.Y, {
                isOpen: t,
                onOpenChange: n,
                className: "bg-background",
                size: "xl",
                children: (0, a.jsx)(z.g, {
                  children: (e) =>
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(M.c, {
                          className: "flex flex-col gap-1",
                          children: "Создание обмена",
                        }),
                        (0, a.jsx)(O.h, {
                          children: (0, a.jsx)(K, {
                            email: b,
                            setEmail: f,
                            phone: j,
                            setPhone: N,
                            address: w,
                            setAddress: C,
                            addressDesttag: _,
                            setAddressDesttag: k,
                            check: E,
                            setCheck: S,
                          }),
                        }),
                        (0, a.jsx)(P.q, {
                          children: (0, a.jsx)(y.T, {
                            className:
                              "max-xl:bg-accent max-xl:border-none xl:border-accent text-background min-h-14 xl:text-[#F1FFC7] text-2xl font-medium font-rimma-sans",
                            radius: "lg",
                            size: "lg",
                            variant: "bordered",
                            isDisabled:
                              Y ||
                              0 == w.length ||
                              B ||
                              0 == b.length ||
                              G ||
                              0 == j.length ||
                              !E,
                            isLoading: F,
                            onPress: V,
                            style: { fontSize: "20px" },
                            children: "Создать",
                          }),
                        }),
                      ],
                    }),
                }),
              }),
            ],
          });
        },
        U = () => {
          let { setCreateOrderBTN: e, loading: t } = p(),
            {
              saleCryptoSelect: s,
              setSaleCryptoSelect: r,
              purchaseCryptoSelect: l,
              setPurchaseCryptoSelect: n,
            } = g(),
            { errors: c } = x(),
            {
              saleAmount: i,
              setSaleAmount: o,
              purchaseAmount: d,
              setPurchaseAmount: u,
              setEditingFieldAmount: m,
            } = p();
          return (0, a.jsx)(f, {
            children: (0, a.jsxs)("div", {
              className: "container mb-32",
              children: [
                (0, a.jsx)("div", {
                  className: "flex flex-col gap-10 mb-32",
                  children: (0, a.jsxs)("div", {
                    className:
                      "text-8xl flex items-center flex-col font-rimma-sans text-accent",
                    children: [
                      (0, a.jsx)("div", {
                        className: "lg:mr-64",
                        children: "ОБМЕН",
                      }),
                      (0, a.jsx)("div", {
                        className: "text-[#F1FFC7]",
                        children: "ЦИФРОВЫХ",
                      }),
                      (0, a.jsx)("div", {
                        className: "lg:ml-64",
                        children: "ВАЛЮТ",
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center flex-col xl:flex-row gap-10",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "w-full relative",
                      children: [
                        (0, a.jsx)(j.r, {
                          value: i,
                          size: "lg",
                          placeholder: "0.00",
                          type: "number",
                          variant: "bordered",
                          labelPlacement: "outside",
                          classNames: {
                            inputWrapper:
                              "min-h-16 border-[#F1FFC7] group-data-[focus=true]:border-white",
                            label: "pb-2",
                          },
                          endContent: (0, a.jsx)(S, {
                            cryptoSelect: s,
                            setCryptoSelect: r,
                          }),
                          onChange: (e) => {
                            m("give"), o(e.target.value);
                          },
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "absolute font-semibold -top-9 left-1 text-lg",
                          children: "Продать",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "absolute font-medium -bottom-9 left-1 text-base cursor-pointer",
                          onClick: () => {
                            s && (m("give"), o(s.min_receive.toString()));
                          },
                          children: [
                            "Минимум:",
                            " ",
                            (0, a.jsxs)("span", {
                              className: "".concat(
                                s && c.amountGive && Number(i) < s.min_receive
                                  ? "text-danger-500"
                                  : "text-accent"
                              ),
                              children: [
                                null == s ? void 0 : s.min_receive,
                                " ",
                                null == s ? void 0 : s.currency,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "",
                      children: (0, a.jsx)(y.T, {
                        size: "lg",
                        variant: "bordered",
                        radius: "full",
                        isIconOnly: !0,
                        onPress: () => {
                          s && l && (r(l), n(s));
                        },
                        className: "min-h-16 min-w-16 border-accent",
                        children: (0, a.jsx)(N.QkK, {
                          className: "text-4xl xl:rotate-90 text-accent",
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "w-full relative",
                      children: [
                        (0, a.jsx)(j.r, {
                          value: d,
                          size: "lg",
                          placeholder: "0.00",
                          type: "number",
                          variant: "bordered",
                          labelPlacement: "outside",
                          classNames: {
                            inputWrapper:
                              "min-h-16 border-[#F1FFC7] group-data-[focus=true]:border-white",
                            label: "pb-2",
                          },
                          endContent: (0, a.jsx)(S, {
                            cryptoSelect: l,
                            setCryptoSelect: n,
                          }),
                          onChange: (e) => {
                            m("get"), u(e.target.value);
                          },
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "absolute font-semibold -top-9 left-1 text-lg",
                          children: "Купить",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "max-xl:w-full",
                      children: (0, a.jsx)($, {}),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [446, 711, 512, 873, 479, 206, 410, 600, 140, 745, 794, 441, 517, 358],
      () => t(47096)
    ),
      (_N_E = e.O());
  },
]);
