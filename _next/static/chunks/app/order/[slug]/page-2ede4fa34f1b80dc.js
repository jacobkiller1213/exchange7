(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [939],
  {
    39298: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 83095)),
        Promise.resolve().then(a.bind(a, 2794));
    },
    83095: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => j });
      var t = a(95155),
        l = a(38157);
      class c {
        async order(e) {
          return l.i.get("order/".concat(e));
        }
        async deposit(e) {
          return l.i.get("".concat(this.link, "/deposit/").concat(e));
        }
        constructor() {
          this.link = "/order/bulk";
        }
      }
      let r = new c();
      var d = a(51503),
        n = a(88629),
        i = a(84403),
        o = a(12115),
        m = a(35906),
        x = a(6698),
        h = a(2218);
      let p = (e) => {
        let { orderData: s, slug: a } = e,
          l = (0, m.jE)(),
          [c, d] = (0, o.useState)(3600);
        (0, o.useEffect)(() => {
          s &&
            s.created_at &&
            d(
              Math.max(
                Math.floor(
                  (new Date(new Date(s.created_at).getTime() + 36e5).getTime() -
                    Date.now()) /
                    1e3
                ),
                0
              )
            );
        }, [s]),
          (0, o.useEffect)(() => {
            if (0 === c) return;
            let e = setInterval(() => {
              d((e) => Math.max(e - 1, 0));
            }, 1e3);
            return () => clearInterval(e);
          }, [c]);
        let n = Math.floor(c / 60),
          i = c % 60,
          p = ""
            .concat(String(n).padStart(2, "0"), ":")
            .concat(String(i).padStart(2, "0"));
        return (0, t.jsxs)("div", {
          className: "flex flex-col items-center gap-20 mt-20",
          children: [
            (0, t.jsx)("div", {
              className: "font-rimma-sans text-accent text-center",
              style: { fontSize: "42px" },
              children: "Обмен цифровых валют",
            }),
            (0, t.jsx)("div", {
              className:
                "w-full lg:w-4/5 border-2 border-[#F1FFC7] p-7 py-10 rounded-3xl",
              children: (0, t.jsxs)("div", {
                className: "flex flex-col gap-7 text-lg relative",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "absolute top-0 right-0 flex flex-col gap-1 items-center border-2 border-accent rounded-3xl h-40 w-52 justify-center max-md:w-full max-md:h-24 max-md:top-10 max-sm:top-20",
                    children: [
                      (0, t.jsx)("span", {
                        className: "font-bold max-md:text-sm",
                        children: "Время на оплату",
                      }),
                      (0, t.jsx)("span", {
                        className: "font-extrabold text-3xl md:text-5xl",
                        children: p,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("span", {
                    className: "text-2xl font-bold",
                    children: ["Ваша заявка №", a],
                  }),
                  (0, t.jsxs)("div", {
                    className: "mt-32 md:mt-20",
                    children: [
                      (0, t.jsx)("span", {
                        className: "text-xl font-semibold",
                        children: "Отправка",
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "border-2 border-[#F1FFC7] bg-opacity-55 p-4 rounded-xl mt-2",
                        children: (0, t.jsxs)("div", {
                          className: "payment_form-block",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "font-semibold",
                                  children: "Сумма к оплате",
                                }),
                                (0, t.jsx)(x._, {
                                  variant: "bordered",
                                  className: "border-none pl-0 pt-0 ",
                                  hideSymbol: !0,
                                  onCopy: () => s.amount_sale.toString(),
                                  tooltipProps: {
                                    color: "foreground",
                                    content: "Скопировать",
                                    disableAnimation: !0,
                                    placement: "right",
                                    closeDelay: 0,
                                  },
                                  children: (0, t.jsxs)("div", {
                                    className: "text-base",
                                    children: [
                                      s.amount_sale,
                                      " (",
                                      s.crypto_sale.currency,
                                      ")",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "payment_form-block-item",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: "font-semibold",
                                      children: "Адрес для оплаты",
                                    }),
                                    (0, t.jsx)(x._, {
                                      variant: "bordered",
                                      className: "border-none pl-0 pt-0 w-full",
                                      hideSymbol: !0,
                                      onCopy: () => s.wallet_payment.toString(),
                                      classNames: {
                                        pre: "flex items-center gap-2.5 truncate",
                                      },
                                      tooltipProps: {
                                        color: "foreground",
                                        content: "Скопировать",
                                        disableAnimation: !0,
                                        placement: "right",
                                        closeDelay: 0,
                                      },
                                      children: (0, t.jsx)("div", {
                                        className: "text-base",
                                        children: s.wallet_payment,
                                      }),
                                    }),
                                  ],
                                }),
                                s.memo_payment &&
                                  (0, t.jsxs)("div", {
                                    className: "",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "font-semibold",
                                        children: "Тег(MEMO) для оплаты",
                                      }),
                                      (0, t.jsx)(x._, {
                                        variant: "bordered",
                                        className:
                                          "border-none pl-0 pt-0  w-full",
                                        classNames: { pre: "truncate" },
                                        hideSymbol: !0,
                                        onCopy: () => s.memo_payment,
                                        tooltipProps: {
                                          color: "foreground",
                                          content: "Скопировать",
                                          disableAnimation: !0,
                                          placement: "right",
                                          closeDelay: 0,
                                        },
                                        children: (0, t.jsx)("div", {
                                          className: "text-base ",
                                          children: s.memo_payment,
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "",
                    children: [
                      (0, t.jsx)("span", {
                        className: "text-xl font-semibold",
                        children: "Получение",
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "border-2 border-[#F1FFC7] bg-opacity-55 p-4 rounded-xl mt-2",
                        children: (0, t.jsxs)("div", {
                          className: "payment_form-block",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "mb-1.5",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "font-semibold",
                                  children: "Сумма к получению",
                                }),
                                (0, t.jsxs)("div", {
                                  className: "text-base",
                                  children: [
                                    s.amount_purchase,
                                    " (",
                                    s.crypto_purchase.currency,
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "payment_form-block-item",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "font-semibold",
                                  children: "Адрес получения",
                                }),
                                (0, t.jsx)("div", {
                                  className: "text-base break-all",
                                  children: s.wallet,
                                }),
                                s.memo &&
                                  (0, t.jsx)("div", {
                                    className: "font-semibold mt-4",
                                    children: "Тег(MEMO) получения",
                                  }),
                                s.memo &&
                                  (0, t.jsx)("div", {
                                    className: "text-base break-all",
                                    children: s.memo,
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "border-2 border-[#F1FFC7] p-4 rounded-xl text-base",
                    children: (0, t.jsx)("div", {
                      className: "",
                      children:
                        "Мы не принимаем монеты, отправленные с бирж Rapira и Capitalist. Средства с этих платформ будут временно заблокированы, а поставщик ликвидности потребует пройти процедуру KYC.",
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "border-2 border-[#F1FFC7] p-4 rounded-xl text-base",
                    children: (0, t.jsx)("div", {
                      className: "",
                      children:
                        "Уважаемый клиент! Сообщаем Вам, что для успешного обмена нужно дождаться нужного количества подтверждений сети. Во избежание потери средств просим Вас отправлять средства исключительно в нужной сети. После отправки средств по нашим реквизитам транзакция будет проверена на источники происхождения средств посредством AML-проверки. Только после успешного прохождения AML-проверки начнется отсчет времени проведения транзакции. При создании заявки курс по данному направлению не фиксирован и будет зафиксирован после получения необходимых подтверждений. Курс в заявке рассчитывается на основе среднего ордера на биржах (Binance/Bybit/Kucoin/Whitebit).",
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "border-2 border-[#F1FFC7] p-4 rounded-xl text-base",
                    children: (0, t.jsx)("div", {
                      className: "",
                      children:
                        "Уважаемые клиенты! Пожалуйста, убедитесь, что получаемая вами валюта соответствует указанной вами сети, чтобы избежать потери средств.",
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "hidden buttons-container-accept-decline",
                    children: (0, t.jsx)(h.T, {
                      className:
                        "bg-accent border-none  text-background  w-full min-h-16 text-2xl font-medium font-rimma-sans",
                      radius: "lg",
                      size: "lg",
                      variant: "bordered",
                      style: { fontSize: "16px" },
                      onPress: async () => {
                        try {
                          await r.deposit(a);
                        } catch (e) {
                          console.log(e);
                        }
                        l.invalidateQueries({ queryKey: ["orderData", a] });
                      },
                      children: "Подтвердить платеж",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var u = a(30227);
      let b = (e) => {
          let { orderData: s, slug: a } = e;
          return (0, t.jsxs)("div", {
            className: "flex flex-col items-center gap-20 mt-20",
            children: [
              (0, t.jsxs)("div", {
                className: "font-rimma-sans text-accent text-center",
                style: { fontSize: "42px" },
                children: [
                  "Ваша заявка ",
                  (0, t.jsxs)("span", {
                    className: "text-[#F1FFC7]",
                    children: ["№", a],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  "w-full lg:w-4/5 border-2 border-[#F1FFC7] p-7 py-10 rounded-3xl",
                children: [
                  (0, t.jsx)("div", {
                    className: "font-semibold text-3xl",
                    children:
                      "success" == s.status
                        ? "Заявка выполненна"
                        : "paid" == s.status
                        ? "Заявка оплачена"
                        : "stoped" == s.status
                        ? "Заявка приостановлена"
                        : "rejected_time" == s.status
                        ? "Заявка истекла по времени."
                        : "Заявка в обработке",
                  }),
                  (0, t.jsx)("div", {
                    className: "text-accent/50 font-semibold mt-1 text-lg",
                    children:
                      "success" == s.status
                        ? "Спасибо что воспользовались нашим сервисом."
                        : "paid" == s.status
                        ? "Оператор приступил к обработке заявки"
                        : "stoped" == s.status
                        ? (0, t.jsxs)("div", {
                            className: "",
                            children: [
                              "Для продолжения процедуры обмена вам необходимо предоставить дополнительную информацию нашей ",
                              (0, t.jsx)("a", {
                                href: u.cy,
                                className: " underline text-accent/100",
                                children: "службе поддержки",
                              }),
                              ".",
                            ],
                          })
                        : "rejected_time" == s.status
                        ? "Время для оплаты заявки истекло, создайте новую заявку."
                        : "Мы проверяем данные в заявке и обрабатываем её.",
                  }),
                  (0, t.jsxs)("div", {
                    className: "mt-10 flex flex-col gap-3",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "border-2 border-[#F1FFC7] p-7 py-10 rounded-3xl flex flex-col gap-4",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, t.jsx)("div", {
                                className: "text-accent font-semibold text-xl",
                                children: "Направление обмена",
                              }),
                              (0, t.jsxs)("div", {
                                className: "font-medium",
                                children: [
                                  s.crypto_sale.currency,
                                  " -",
                                  " ",
                                  s.crypto_purchase.currency,
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, t.jsx)("div", {
                                className: "text-accent font-semibold text-xl",
                                children: "Сумма к получению",
                              }),
                              (0, t.jsx)("div", {
                                className: "font-medium",
                                children: s.amount_purchase + " " + s.crypto_purchase.currency,
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, t.jsx)("div", {
                                className: "text-accent font-semibold text-xl",
                                children: "Адрес получения",
                              }),
                              (0, t.jsx)("div", {
                                className: "font-medium break-words",
                                children: s.wallet,
                              }),
                              s.memo &&
                                (0, t.jsx)("div", {
                                  className:
                                    "text-accent font-semibold text-xl mt-3",
                                  children: "Тег(MEMO) получения",
                                }),
                              s.memo &&
                                (0, t.jsx)("div", {
                                  className: "font-medium break-words",
                                  children: s.memo,
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "border-2 border-[#F1FFC7] p-7 py-10 rounded-3xl flex flex-col gap-4",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, t.jsx)("div", {
                                className: "text-accent font-semibold text-xl",
                                children: "Сумма к оплате",
                              }),
                              (0, t.jsx)("div", {
                                className: "font-medium",
                                children: s.amount_sale + " " + s.crypto_sale.currency,
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, t.jsx)("div", {
                                className: "text-accent font-semibold text-xl",
                                children: "Адрес для оплаты",
                              }),
                              (0, t.jsx)("div", {
                                className: "font-medium break-words",
                                children: s.wallet_payment,
                              }),
                              s.memo_payment &&
                                (0, t.jsx)("div", {
                                  className:
                                    "text-accent font-semibold text-xl",
                                  children: "Тег(MEMO) для оплаты",
                                }),
                              s.memo_payment &&
                                (0, t.jsx)("div", {
                                  className: "font-medium break-words mt-4",
                                  children: s.memo_payment,
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        f = (e) => {
          let { slug: s } = e,
            [a, l] = (0, o.useState)(!1),
            {
              data: c,
              isLoading: m,
              isError: x,
            } = (0, n.I)({
              queryKey: ["orderData", s],
              queryFn: async () => {
                let e = (await r.order(s)).data;
                return l(!["step-1", "success"].includes(e.status)), e;
              },
              placeholderData: i.rX,
              refetchInterval: a && 15e3,
            });
          return m || !c
            ? (0, t.jsx)("div", {
                className:
                  "container mx-auto px-7 min-h-[calc(100vh-35rem)] flex items-center justify-center",
                children: (0, t.jsx)(d.o, { size: "lg", color: "secondary" }),
              })
            : (0, t.jsx)("div", {
                className: "container mb-28",
                children:
                  "waiting" == c.status
                    ? (0, t.jsx)(p, { orderData: c, slug: s })
                    : (0, t.jsx)(b, { orderData: c, slug: s }),
              });
        },
        j = (e) => {
          let { slug: s } = e;
          return (0, t.jsx)(o.Suspense, {
            children: (0, t.jsx)(f, { slug: s }),
          });
        };
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [446, 711, 512, 873, 410, 600, 140, 698, 794, 441, 517, 358], () =>
      s(39298)
    ),
      (_N_E = e.O());
  },
]);
