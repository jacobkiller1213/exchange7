"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [794],
  {
    30227: (e, t, s) => {
      s.d(t, { VS: () => r, cy: () => a });
      let a = "https://t.me/ChainGrams_ex",
        r = ["TON", "USDTTON", "XRP", "NOT", "EOS", "XLM"];
    },
    65564: (e, t, s) => {
      s.d(t, { dj: () => u });
      var a = s(12115);
      let r = 0,
        l = new Map(),
        i = (e) => {
          if (l.has(e)) return;
          let t = setTimeout(() => {
            l.delete(e), c({ type: "REMOVE_TOAST", toastId: e });
          }, 1e6);
          l.set(e, t);
        },
        n = (e, t) => {
          switch (t.type) {
            case "ADD_TOAST":
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
            case "UPDATE_TOAST":
              return {
                ...e,
                toasts: e.toasts.map((e) =>
                  e.id === t.toast.id ? { ...e, ...t.toast } : e
                ),
              };
            case "DISMISS_TOAST": {
              let { toastId: s } = t;
              return (
                s
                  ? i(s)
                  : e.toasts.forEach((e) => {
                      i(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === s || void 0 === s ? { ...e, open: !1 } : e
                  ),
                }
              );
            }
            case "REMOVE_TOAST":
              if (void 0 === t.toastId) return { ...e, toasts: [] };
              return {
                ...e,
                toasts: e.toasts.filter((e) => e.id !== t.toastId),
              };
          }
        },
        o = [],
        d = { toasts: [] };
      function c(e) {
        (d = n(d, e)),
          o.forEach((e) => {
            e(d);
          });
      }
      function x(e) {
        let { ...t } = e,
          s = (r = (r + 1) % Number.MAX_SAFE_INTEGER).toString(),
          a = () => c({ type: "DISMISS_TOAST", toastId: s });
        return (
          c({
            type: "ADD_TOAST",
            toast: {
              ...t,
              id: s,
              open: !0,
              onOpenChange: (e) => {
                e || a();
              },
            },
          }),
          {
            id: s,
            dismiss: a,
            update: (e) => c({ type: "UPDATE_TOAST", toast: { ...e, id: s } }),
          }
        );
      }
      function u() {
        let [e, t] = a.useState(d);
        return (
          a.useEffect(
            () => (
              o.push(t),
              () => {
                let e = o.indexOf(t);
                e > -1 && o.splice(e, 1);
              }
            ),
            [e]
          ),
          {
            ...e,
            toast: x,
            dismiss: (e) => c({ type: "DISMISS_TOAST", toastId: e }),
          }
        );
      }
    },
    2794: (e, t, s) => {
      s.d(t, { default: () => ex });
      var a = s(95155),
        r = s(12115),
        l = s(17572),
        i = s(2218),
        n = s(80233),
        o = s(31027),
        d = s(43463),
        c = s(69795);
      function x() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, c.QP)((0, d.$)(t));
      }
      let u = n.bL,
        m = n.l9;
      n.bm;
      let C = n.ZL,
        h = r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(n.hJ, {
            className: x(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              s
            ),
            ...r,
            ref: t,
          });
        });
      h.displayName = n.hJ.displayName;
      let f = (0, o.F)(
          "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
          {
            variants: {
              side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom:
                  "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right:
                  "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
              },
            },
            defaultVariants: { side: "right" },
          }
        ),
        p = r.forwardRef((e, t) => {
          let { side: s = "right", className: r, children: l, ...i } = e;
          return (0, a.jsxs)(C, {
            children: [
              (0, a.jsx)(h, {}),
              (0, a.jsx)(n.UC, {
                ref: t,
                className: x(f({ side: s }), r),
                ...i,
                children: l,
              }),
            ],
          });
        });
      p.displayName = n.UC.displayName;
      let g = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: x("flex flex-col space-y-2 text-center sm:text-left", t),
          ...s,
        });
      };
      g.displayName = "SheetHeader";
      let j = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(n.hE, {
          ref: t,
          className: x("text-lg font-semibold text-foreground", s),
          ...r,
        });
      });
      (j.displayName = n.hE.displayName),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(n.VY, {
            ref: t,
            className: x("text-sm text-muted-foreground", s),
            ...r,
          });
        }).displayName = n.VY.displayName);
      var v = s(30227),
        N = s(36021),
        b = s(51747),
        w = s(76046),
        M = s(76084),
        y = s(46280),
        V = s(23753);
      let Z = n.bL,
        H = n.l9,
        L = n.ZL;
      n.bm;
      let k = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(n.hJ, {
          ref: t,
          className: x(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            s
          ),
          ...r,
        });
      });
      k.displayName = n.hJ.displayName;
      let _ = r.forwardRef((e, t) => {
        let { className: s, children: r, ...l } = e;
        return (0, a.jsxs)(L, {
          children: [
            (0, a.jsx)(k, {}),
            (0, a.jsxs)(n.UC, {
              ref: t,
              className: x(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                s
              ),
              ...l,
              children: [
                r,
                (0, a.jsxs)(n.bm, {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                  children: [
                    (0, a.jsx)(V.A, { className: "h-4 w-4" }),
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      _.displayName = n.UC.displayName;
      let T = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: x("flex flex-col space-y-1.5 text-center sm:text-left", t),
          ...s,
        });
      };
      T.displayName = "DialogHeader";
      let A = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: x(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...s,
        });
      };
      A.displayName = "DialogFooter";
      let E = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(n.hE, {
          ref: t,
          className: x("text-lg font-semibold leading-none tracking-tight", s),
          ...r,
        });
      });
      (E.displayName = n.hE.displayName),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(n.VY, {
            ref: t,
            className: x("text-sm text-muted-foreground", s),
            ...r,
          });
        }).displayName = n.VY.displayName);
      var S = s(52180),
        I = s(2725);
      let R = (e) =>
          (0, a.jsxs)("svg", {
            "aria-hidden": "true",
            fill: "none",
            focusable: "false",
            height: "1em",
            role: "presentation",
            viewBox: "0 0 24 24",
            width: "1em",
            ...e,
            children: [
              (0, a.jsx)("path", {
                d: "M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z",
                fill: "currentColor",
              }),
            ],
          }),
        P = (e) =>
          (0, a.jsxs)("svg", {
            "aria-hidden": "true",
            fill: "none",
            focusable: "false",
            height: "1em",
            role: "presentation",
            viewBox: "0 0 24 24",
            width: "1em",
            ...e,
            children: [
              (0, a.jsx)("path", {
                d: "M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z",
                fill: "currentColor",
              }),
            ],
          }),
        D = (e) => {
          let {
            email: t,
            setEmail: s,
            password: r,
            setPassword: l,
            isVisible: i,
            setIsVisible: n,
            isInvalidEmail: o,
            isInvalidPassword: d,
            check: c,
            setCheck: x,
          } = e;
          return (0, a.jsxs)("div", {
            className: "grid gap-4 py-4",
            children: [
              (0, a.jsx)(S.r, {
                color: t.length > 0 ? (o ? "danger" : "success") : "default",
                errorMessage: "Введите корректный email",
                isInvalid: o,
                label: "Email",
                type: "email",
                value: t,
                variant: "bordered",
                onValueChange: s,
                classNames: {
                  inputWrapper: "group-data-[focus=true]:border-[#5e6088]",
                },
              }),
              (0, a.jsx)(S.r, {
                color: r.length > 0 ? (d ? "danger" : "success") : "default",
                label: "Пароль",
                type: i ? "text" : "password",
                endContent: (0, a.jsx)("button", {
                  "aria-label": "toggle password visibility",
                  className: "focus:outline-none",
                  type: "button",
                  onClick: () => n(!i),
                  children: i
                    ? (0, a.jsx)(R, {
                        className:
                          "text-2xl text-default-400 pointer-events-none",
                      })
                    : (0, a.jsx)(P, {
                        className:
                          "text-2xl text-default-400 pointer-events-none",
                      }),
                }),
                value: r,
                variant: "bordered",
                errorMessage: "Пароль должен содержать не меньше 8 символов",
                isInvalid: d,
                onValueChange: l,
                classNames: {
                  inputWrapper: "group-data-[focus=true]:border-[#5e6088]",
                },
              }),
              (0, a.jsx)("div", {
                className: "flex items-center gap-0.5",
                children: (0, a.jsx)(I.A, {
                  isSelected: c,
                  onValueChange: x,
                  classNames: { wrapper: "after:bg-[#d48a4a]" },
                  children: "Запомнить меня",
                }),
              }),
            ],
          });
        },
        z = (e) => {
          let {
            email: t,
            setEmail: s,
            password: r,
            setPassword: l,
            passwordTwo: i,
            setPasswordTwo: n,
            isVisible: o,
            setIsVisible: d,
            isInvalidEmail: c,
            isInvalidPassword: x,
            isInvalidPasswordTwo: u,
            check: m,
            setCheck: C,
          } = e;
          return (0, a.jsxs)("div", {
            className: "grid gap-4 py-4",
            children: [
              (0, a.jsx)(S.r, {
                color: t.length > 0 ? (c ? "danger" : "success") : "default",
                errorMessage: "Введите корректный email",
                isInvalid: c,
                label: "Email",
                type: "email",
                value: t,
                variant: "bordered",
                onValueChange: s,
                classNames: {
                  inputWrapper: "group-data-[focus=true]:border-[#5e6088]",
                },
              }),
              (0, a.jsx)(S.r, {
                color: r.length > 0 ? (x ? "danger" : "success") : "default",
                label: "Пароль",
                type: o ? "text" : "password",
                endContent: (0, a.jsx)("button", {
                  "aria-label": "toggle password visibility",
                  className: "focus:outline-none",
                  type: "button",
                  onClick: () => d(!o),
                  children: o
                    ? (0, a.jsx)(R, {
                        className:
                          "text-2xl text-default-400 pointer-events-none",
                      })
                    : (0, a.jsx)(P, {
                        className:
                          "text-2xl text-default-400 pointer-events-none",
                      }),
                }),
                value: r,
                variant: "bordered",
                errorMessage: "Пароль должен содержать не меньше 8 символов",
                isInvalid: x,
                onValueChange: l,
                classNames: {
                  inputWrapper: "group-data-[focus=true]:border-[#5e6088]",
                },
              }),
              (0, a.jsx)(S.r, {
                color: i.length > 0 ? (x ? "danger" : "success") : "default",
                label: "Повторите пароль",
                type: o ? "text" : "password",
                endContent: (0, a.jsx)("button", {
                  "aria-label": "toggle password visibility",
                  className: "focus:outline-none",
                  type: "button",
                  onClick: () => d(!o),
                  children: o
                    ? (0, a.jsx)(R, {
                        className:
                          "text-2xl text-default-400 pointer-events-none",
                      })
                    : (0, a.jsx)(P, {
                        className:
                          "text-2xl text-default-400 pointer-events-none",
                      }),
                }),
                value: i,
                variant: "bordered",
                errorMessage: "Пароли должны совпадать",
                isInvalid: u,
                onValueChange: n,
                classNames: {
                  inputWrapper: "group-data-[focus=true]:border-[#5e6088]",
                },
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center gap-0.5",
                children: [
                  (0, a.jsx)(I.A, {
                    isSelected: m,
                    onValueChange: C,
                    classNames: { wrapper: "after:bg-accent text-black" },
                  }),
                  (0, a.jsx)("div", {
                    className: "",
                    children: (0, a.jsxs)("span", {
                      children: [
                        "Соглашаюсь с",
                        " ",
                        (0, a.jsx)("a", {
                          href: "/doc/rules",
                          className: "text-accent",
                          children: "правилами",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        O = () => {
          let e = (0, w.useRouter)(),
            { accountData: t, setAccountData: s } = (0, b.E)(),
            [l, n] = (0, r.useState)(""),
            [o, d] = (0, r.useState)(""),
            [c, x] = (0, r.useState)(""),
            [u, m] = (0, r.useState)(!1),
            [C, h] = r.useState(!1),
            [f, p] = (0, r.useState)(!1),
            [g, j] = (0, r.useState)("login"),
            v = (e) => e.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
            M = r.useMemo(() => "" !== l && !v(l), [l]),
            y = r.useMemo(() => "" !== o && o.length < 8, [o]),
            V = r.useMemo(() => "" !== c && c !== o, [c, o]);
          (0, r.useEffect)(() => {
            n(""), d(""), x(""), m(!1), h(!1);
          }, [g]);
          let L = async () => {
              p(!0);
              try {
                let t = await N.A.login(l, o);
                s({
                  email: t.data.email,
                  referral: t.data.referral,
                  token: t.data.token,
                }),
                  e.push("/account/profile");
              } catch (e) {
              } finally {
                p(!1);
              }
            },
            k = async () => {
              p(!0);
              try {
                let t = await N.A.register(l, o);
                s({
                  email: t.data.email,
                  referral: t.data.referral,
                  token: t.data.token,
                }),
                  e.push("/account/profile");
              } catch (e) {
              } finally {
                p(!1);
              }
            };
          return (0, a.jsxs)(Z, {
            children: [
              (0, a.jsx)(H, {
                asChild: !0,
                children: (0, a.jsx)(i.T, {
                  className: "bg-accent text-black font-bold",
                  children: "Войти",
                }),
              }),
              (0, a.jsxs)(_, {
                className: "bg-background border-none",
                children: [
                  (0, a.jsx)(T, {
                    children: (0, a.jsx)(E, {
                      className: "text-center font-medium",
                      children:
                        "login" == g ? "Вход в личный кабинет" : "Регистрация",
                    }),
                  }),
                  "login" == g
                    ? (0, a.jsx)(D, {
                        email: l,
                        setEmail: n,
                        password: o,
                        setPassword: d,
                        isVisible: C,
                        setIsVisible: h,
                        isInvalidEmail: M,
                        isInvalidPassword: y,
                        check: u,
                        setCheck: m,
                      })
                    : (0, a.jsx)(z, {
                        email: l,
                        setEmail: n,
                        password: o,
                        setPassword: d,
                        passwordTwo: c,
                        setPasswordTwo: x,
                        isVisible: C,
                        setIsVisible: h,
                        isInvalidEmail: M,
                        isInvalidPassword: y,
                        isInvalidPasswordTwo: V,
                        check: u,
                        setCheck: m,
                      }),
                  (0, a.jsx)(A, {
                    className: "w-full block",
                    children:
                      "login" == g
                        ? (0, a.jsxs)("div", {
                            className: "",
                            children: [
                              (0, a.jsx)(i.T, {
                                className:
                                  "border-accent text-foreground w-full",
                                variant: "bordered",
                                isDisabled:
                                  y || M || 0 == l.length || 0 == o.length,
                                isLoading: f,
                                onPress: L,
                                children: "Войти",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "w-full flex justify-end mt-3 text-accent cursor-pointer text-sm",
                                onClick: () => j("registration"),
                                children: "Зарегистрироваться",
                              }),
                            ],
                          })
                        : (0, a.jsxs)("div", {
                            className: "",
                            children: [
                              (0, a.jsx)(i.T, {
                                className:
                                  "border-accent text-foreground w-full",
                                variant: "bordered",
                                isDisabled:
                                  y ||
                                  M ||
                                  0 == l.length ||
                                  0 == o.length ||
                                  V ||
                                  0 == c.length ||
                                  !u,
                                onPress: k,
                                children: "Зарегистрироваться",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "w-full flex justify-end mt-3 text-accent cursor-pointer text-sm",
                                onClick: () => j("login"),
                                children: "Уже есть аккаунт",
                              }),
                            ],
                          }),
                  }),
                ],
              }),
            ],
          });
        };
      var U = s(11536);
      let F = (e) => {
        let { navMenu: t } = e,
          s = (0, w.useRouter)(),
          r = (0, w.usePathname)(),
          { accountData: n, setAccountData: o } = (0, b.E)();
        return (0, a.jsxs)(u, {
          children: [
            (0, a.jsx)(m, {
              asChild: !0,
              children: (0, a.jsx)(i.T, {
                isIconOnly: !0,
                variant: "light",
                size: "lg",
                children: (0, a.jsx)(M.AFV, {
                  className: "text-3xl text-foreground-50",
                }),
              }),
            }),
            (0, a.jsxs)(p, {
              className: "bg-background border-none",
              children: [
                (0, a.jsx)(g, {
                  children: (0, a.jsx)(j, {
                    children: (0, a.jsxs)("div", {
                      className:
                        "flex gap-5 border-b pb-3 border-description justify-between items-center",
                      children: [
                        (0, a.jsx)("div", {
                          children: (0, a.jsx)(i.T, {
                            startContent: (0, a.jsx)(U.hFS, {
                              className: "text-xl",
                            }),
                            variant: "bordered",
                            as: l.h,
                            href: v.cy,
                            className: "border-accent ",
                            children: (0, a.jsx)("span", {
                              className: "text-[#F1FFC7]",
                              children: "Поддержка",
                            }),
                          }),
                        }),

                      ],
                    }),
                  }),
                }),
                (0, a.jsxs)("nav", {
                  className: "mt-3",
                  children: [
                    (0, a.jsx)("ul", {
                      className:
                        "flex flex-col gap-3 py-3 border-b-1 border-description",
                      children: t.map((e) =>
                        (0, a.jsx)(
                          "li",
                          {
                            children: (0, a.jsxs)(l.h, {
                              href: e.link,
                              color: "foreground",
                              size: "md",
                              className:
                                "hover:opacity-100 hover:text-accent flex items-center gap-3",
                              children: [
                                (0, a.jsx)("div", {
                                  className: " w-5 h-5",
                                  children: (0, a.jsx)(e.icon, {}),
                                }),
                                e.name,
                              ],
                            }),
                          },
                          e.id
                        )
                      ),
                    }),
                    n.email &&
                      (0, a.jsx)("div", {
                        className: "py-3 border-b-1 border-description",
                        children: (0, a.jsx)("div", {
                          className: "flex flex-col gap-2",
                          children: (0, a.jsxs)(l.h, {
                            color: "foreground",
                            size: "md",
                            className:
                              "hover:opacity-100 hover:text-accent flex items-center gap-3 cursor-pointer",
                            onPress: async () => {
                              try {
                                await N.A.logout(),
                                  "/" === r
                                    ? (window.location.href = "/")
                                    : s.push("/");
                              } catch (e) {
                                return;
                              }
                            },
                            children: [
                              (0, a.jsx)("div", {
                                className: "",
                                children: (0, a.jsx)(y.xsM, {
                                  className: "text-xl",
                                }),
                              }),
                              "Выйти",
                            ],
                          }),
                        }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var B = s(13970);
      let Y = (e) => {
          let { navMenu: t } = e,
            s = (0, w.usePathname)(),
            r = (0, w.useRouter)(),
            { accountData: n, setAccountData: o } = (0, b.E)();
          return (0, a.jsx)("header", {
            className: "w-full pt-6",
            children: (0, a.jsxs)("div", {
              className:
                "container mx-auto px-7 flex justify-between items-center",
              children: [
                (0, a.jsx)("a", {
                  href: "/",
                  children: (0, a.jsx)("img", {
                    src: "/logo.svg",
                    alt: "",
                    className: "w-48",
                  }),
                }),
                (0, a.jsx)("nav", {
                  className: "hidden xl:block",
                  children: (0, a.jsx)("ul", {
                    className: "flex items-center gap-6",
                    children: t.map(
                      (e) =>
                        e.isDesktop &&
                        (0, a.jsx)(
                          "li",
                          {
                            children: (0, a.jsx)(l.h, {
                              href: e.link,
                              color: "foreground",
                              size: "md",
                              className: "hover:opacity-100 hover:text-accent",
                              children: e.name,
                            }),
                          },
                          e.id
                        )
                    ),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "hidden xl:flex items-center gap-5",
                      children: [
                        (0, a.jsx)("div", {
                          children: (0, a.jsx)(i.T, {
                            startContent: (0, a.jsx)(B.hFS, {
                              className: "text-xl",
                            }),
                            variant: "bordered",
                            as: l.h,
                            href: v.cy,
                            className: "border-accent ",
                            children: (0, a.jsx)("span", {
                              className: "text-[#F1FFC7]",
                              children: "Поддержка",
                            }),
                          }),
                        }),

                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "block xl:hidden",
                      children: (0, a.jsx)(F, { navMenu: t }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        W = (e) => {
          let { navMenu: t } = e;
          return (0, a.jsx)("footer", {
            className: "h-full w-full",
            children: (0, a.jsxs)("div", {
              className: "container mx-auto px-7",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex lg:items-center justify-between flex-col lg:flex-row",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex max-sm:flex-col sm:items-center max-lg:w-full justify-between gap-2",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-3",
                          children: [
                            (0, a.jsx)("a", {
                              href: "/",
                              children: (0, a.jsx)("img", {
                                src: "/logo.svg",
                                alt: "",
                                className: "max-w-44",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "text-description max-w-60",
                              children:
                                "Полуавтоматический сервис по\xa0обмену цифровых валют",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "block lg:hidden text-accent",
                          children: "c 10:00 до 22:00(МСК)",
                        }),
                      ],
                    }),
                    (0, a.jsx)("nav", {
                      className:
                        "flex gap-10 max-lg:mt-10 max-lg:justify-center max-md:flex-col",
                      children: (0, a.jsxs)("ul", {
                        className:
                          "flex flex-wrap w-full gap-10 lg:gap-5 2xl:gap-52",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, a.jsx)(l.h, {
                                href: "/",
                                color: "foreground",
                                size: "md",
                                className:
                                  "hover:opacity-100 hover:text-accent text-description",
                                children: "Обмен",
                              }),
                              (0, a.jsx)(l.h, {
                                href: "/doc/about-us",
                                color: "foreground",
                                size: "md",
                                className:
                                  "hover:opacity-100 hover:text-accent text-description",
                                children: "О нас",
                              }),
                              (0, a.jsx)(l.h, {
                                href: "/doc/rules",
                                color: "foreground",
                                size: "md",
                                className:
                                  "hover:opacity-100 hover:text-accent text-description",
                                children: "Правила",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, a.jsx)(l.h, {
                                href: "/doc/contacts",
                                color: "foreground",
                                size: "md",
                                className:
                                  "hover:opacity-100 hover:text-accent text-description",
                                children: "Контакты",
                              }),
                              (0, a.jsx)(l.h, {
                                href: "/doc/aml-kyc",
                                color: "foreground",
                                size: "md",
                                className:
                                  "hover:opacity-100 hover:text-accent text-description",
                                children: "AML/KYC",
                              }),

                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, a.jsx)(l.h, {
                                href: v.cy,
                                color: "foreground",
                                size: "md",
                                className:
                                  "hover:opacity-100 hover:text-accent text-description",
                                children: "Telegram поддержка",
                              }),
                              (0, a.jsx)("div", {
                                className: "hidden lg:block text-accent",
                                children: "c 10:00 до 22:00(МСК)",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    // (0, a.jsx)("div", { className: "" }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "w-full flex justify-center my-10 ",
                  children: [
                    (0, a.jsx)("div", {
                      className: "text-center mt-5 text-description ",
                      children: "\xa9 2025 ChainGrams.",
                    }),
                    (0, a.jsx)("div", { className: "" }),
                  ],
                }),
              ],
            }),
          });
        };
      var X = s(87066),
        J = s(35906),
        q = s(78561),
        K = s(51503);
      let $ = (e) => {
        let { children: t } = e,
          s = (0, w.usePathname)(),
          l = (0, w.useRouter)(),
          [i, n] = (0, r.useState)(!1),
          { accountData: o, setAccountData: d } = (0, b.E)();
        return ((0, r.useEffect)(() => {
          (async () => {
            n(!0);
            try {
              let e = await N.A.check_session();
              d({
                email: e.data.email,
                referral: e.data.referral,
                token: e.data.token,
              });
            } catch (e) {
              s.includes("/account/") && l.push("/"),
                d({ email: "", referral: "", token: "" });
            } finally {
              n(!1);
            }
          })();
        }, [l]),
        i)
          ? (0, a.jsx)("div", {
              className:
                "min-h-full min-w-full flex items-center justify-center",
              children: (0, a.jsx)(K.o, { size: "lg" }),
            })
          : t;
      };
      var G = s(65564),
        Q = s(60917);
      let ee = Q.Kq,
        et = r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(Q.LM, {
            ref: t,
            className: x(
              "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
              s
            ),
            ...r,
          });
        });
      et.displayName = Q.LM.displayName;
      let es = (0, o.F)(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
          {
            variants: {
              variant: {
                default: "border bg-background text-foreground",
                destructive:
                  "destructive group border-destructive bg-destructive text-destructive-foreground",
              },
            },
            defaultVariants: { variant: "default" },
          }
        ),
        ea = r.forwardRef((e, t) => {
          let { className: s, variant: r, ...l } = e;
          return (0, a.jsx)(Q.bL, {
            ref: t,
            className: x(es({ variant: r }), s),
            ...l,
          });
        });
      (ea.displayName = Q.bL.displayName),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(Q.rc, {
            ref: t,
            className: x(
              "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
              s
            ),
            ...r,
          });
        }).displayName = Q.rc.displayName);
      let er = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(Q.bm, {
          ref: t,
          className: x(
            "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            s
          ),
          "toast-close": "",
          ...r,
          children: (0, a.jsx)(V.A, { className: "h-4 w-4" }),
        });
      });
      er.displayName = Q.bm.displayName;
      let el = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(Q.hE, {
          ref: t,
          className: x("text-sm font-semibold [&+div]:text-xs", s),
          ...r,
        });
      });
      el.displayName = Q.hE.displayName;
      let ei = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(Q.VY, {
          ref: t,
          className: x("text-sm opacity-90", s),
          ...r,
        });
      });
      function en() {
        let { toasts: e } = (0, G.dj)();
        return (0, a.jsxs)(ee, {
          children: [
            e.map(function (e) {
              let { id: t, title: s, description: r, action: l, ...i } = e;
              return (0,
              a.jsxs)(ea, { ...i, children: [(0, a.jsxs)("div", { className: "grid gap-1", children: [s && (0, a.jsx)(el, { children: s }), r && (0, a.jsx)(ei, { children: r })] }), l, (0, a.jsx)(er, {})] }, t);
            }),
            (0, a.jsx)(et, {}),
          ],
        });
      }
      ei.displayName = Q.VY.displayName;
      let eo = (e) => {
          let { children: t } = e,
            [s] = (0, r.useState)(
              () =>
                new X.E({
                  defaultOptions: {
                    queries: { refetchOnWindowFocus: !1, staleTime: 6e4 },
                  },
                })
            );
          return (0, a.jsx)(q.M, {
            children: (0, a.jsxs)(J.Ht, {
              client: s,
              children: [(0, a.jsx)($, { children: t }), (0, a.jsx)(en, {})],
            }),
          });
        },
        ed = () =>
          (0, a.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            name: "icon-home",
            className: "_icon_pg40i_29",
            children: (0, a.jsx)("g", {
              children: (0, a.jsx)("path", {
                d: "M19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V11H1L11.327 1.61198C11.5111 1.44446 11.7511 1.35162 12 1.35162C12.2489 1.35162 12.4889 1.44446 12.673 1.61198L23 11H20V20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21ZM6 19H18V9.15698L12 3.70298L6 9.15698V19Z",
                fill: "currentColor",
              }),
            }),
          }),
        ec = [
          { id: 1, name: "Обмен", link: "/", icon: ed, isDesktop: !0 },
          {
            id: 2,
            name: "О нас",
            link: "/doc/about-us",
            icon: () =>
              (0, a.jsxs)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                name: "icon-rules",
                className: "_icon_pg40i_29",
                children: [
                  (0, a.jsx)("mask", {
                    id: "path-1-inside-1_292_10857",
                    fill: "white",
                    children: (0, a.jsx)("path", {
                      d: "M20.9999 15.3396C20.9999 15.1687 20.9341 15.0048 20.8169 14.884C20.6996 14.7632 20.5407 14.6953 20.3749 14.6953H17.7916L17.7291 6.34094C17.7236 5.71812 17.4798 5.12273 17.0506 4.68433C16.6214 4.24592 16.0417 3.99997 15.4375 4H5.29172C4.68394 4 4.10105 4.2489 3.67128 4.69194C3.24151 5.13497 3.00007 5.73586 3.00007 6.36242V16.9074C2.99732 17.3125 3.07235 17.7142 3.22084 18.0893C3.36932 18.4643 3.58833 18.8054 3.86524 19.0929C4.14216 19.3804 4.4715 19.6085 4.83431 19.7642C5.19712 19.9199 5.58623 20 5.97921 20H18.1249C18.9005 19.9721 19.6348 19.6332 20.1718 19.0557C20.7087 18.4781 21.0058 17.7073 20.9999 16.9074V15.3396ZM5.97921 18.7114C5.52061 18.7114 5.0808 18.5236 4.75652 18.1893C4.43224 17.855 4.25006 17.4016 4.25006 16.9289V6.36242C4.25006 6.07762 4.35981 5.80449 4.55516 5.60311C4.7505 5.40173 5.01545 5.28859 5.29172 5.28859H15.4166C15.6929 5.28859 15.9578 5.40173 16.1532 5.60311C16.3485 5.80449 16.4583 6.07762 16.4583 6.36242L16.5208 14.7168H8.35419C8.18843 14.7168 8.02946 14.7847 7.91225 14.9055C7.79505 15.0263 7.7292 15.1902 7.7292 15.3611V16.9289C7.72921 17.1648 7.68381 17.3983 7.59561 17.616C7.50741 17.8337 7.37818 18.0312 7.2154 18.197C7.05262 18.3628 6.85953 18.4936 6.64733 18.5819C6.43513 18.6702 6.20804 18.7143 5.97921 18.7114ZM19.7499 16.9289C19.7499 17.4016 19.5677 17.855 19.2435 18.1893C18.9192 18.5236 18.4794 18.7114 18.0208 18.7114H8.41669C8.78107 18.1928 8.97787 17.5692 8.97919 16.9289V15.9839H19.7499V16.9289Z",
                    }),
                  }),
                  (0, a.jsx)("path", {
                    d: "M17.7916 14.6953L16.2917 14.7065L16.3028 16.1953H17.7916V14.6953ZM17.7291 6.34094L19.2291 6.32972L19.2291 6.32771L17.7291 6.34094ZM15.4375 4V5.5H15.4375L15.4375 4ZM5.29172 4V2.5V4ZM3.00007 6.36242H1.50007H3.00007ZM3.00007 16.9074L4.50007 16.9176V16.9074H3.00007ZM5.97921 20V18.5H5.97918L5.97921 20ZM18.1249 20V21.5H18.152L18.179 21.499L18.1249 20ZM20.9999 16.9074H19.4999L19.5 16.9184L20.9999 16.9074ZM5.97921 18.7114L5.99784 17.2115L5.98853 17.2114H5.97921V18.7114ZM4.25006 6.36242H2.75006H4.25006ZM15.4166 5.28859V3.78859V5.28859ZM16.4583 6.36242H14.9582L14.9583 6.37364L16.4583 6.36242ZM16.5208 14.7168V16.2168H18.0321L18.0207 14.7056L16.5208 14.7168ZM8.35419 14.7168V16.2168V14.7168ZM7.7292 15.3611H6.2292H7.7292ZM7.7292 16.9289H6.2292V16.929L7.7292 16.9289ZM8.41669 18.7114L7.18938 17.849L5.52943 20.2114H8.41669V18.7114ZM8.97919 16.9289L10.4792 16.9319V16.9289H8.97919ZM8.97919 15.9839V14.4839H7.47919V15.9839H8.97919ZM19.7499 15.9839H21.2499V14.4839H19.7499V15.9839ZM22.4999 15.3396C22.4999 14.7854 22.2868 14.245 21.8935 13.8396L19.7402 15.9284C19.5814 15.7647 19.4999 15.5521 19.4999 15.3396H22.4999ZM21.8935 13.8396C21.4988 13.4327 20.9535 13.1953 20.3749 13.1953V16.1953C20.1279 16.1953 19.9005 16.0937 19.7402 15.9284L21.8935 13.8396ZM20.3749 13.1953H17.7916V16.1953H20.3749V13.1953ZM19.2916 14.6841L19.2291 6.32972L16.2292 6.35216L16.2917 14.7065L19.2916 14.6841ZM19.2291 6.32771C19.2202 5.32377 18.8274 4.35515 18.1225 3.63501L15.9787 5.73364C16.1321 5.89031 16.227 6.11246 16.2292 6.35417L19.2291 6.32771ZM18.1225 3.63501C17.416 2.91336 16.4519 2.49996 15.4374 2.5L15.4375 5.5C15.6314 5.49999 15.8268 5.57848 15.9787 5.73364L18.1225 3.63501ZM15.4375 2.5H5.29172V5.5H15.4375V2.5ZM5.29172 2.5C4.27114 2.5 3.30193 2.91837 2.59462 3.64752L4.74794 5.73635C4.90017 5.57942 5.09674 5.5 5.29172 5.5V2.5ZM2.59462 3.64752C1.88881 4.37513 1.50007 5.35251 1.50007 6.36242H4.50007C4.50007 6.11922 4.59422 5.89482 4.74794 5.73635L2.59462 3.64752ZM1.50007 6.36242V16.9074H4.50007V6.36242H1.50007ZM1.50011 16.8972C1.49606 17.4939 1.60652 18.0866 1.82614 18.6414L4.61553 17.5371C4.53819 17.3418 4.49859 17.1311 4.50004 16.9176L1.50011 16.8972ZM1.82614 18.6414C2.0458 19.1962 2.37092 19.7038 2.78495 20.1336L4.94554 18.0522C4.80574 17.9071 4.69285 17.7324 4.61553 17.5371L1.82614 18.6414ZM2.78495 20.1336C3.19907 20.5635 3.69412 20.9072 4.24282 21.1426L5.4258 18.3857C5.24889 18.3098 5.08524 18.1973 4.94554 18.0522L2.78495 20.1336ZM4.24282 21.1426C4.79164 21.3781 5.38192 21.5 5.97925 21.5L5.97918 18.5C5.79054 18.5 5.60261 18.4616 5.4258 18.3857L4.24282 21.1426ZM5.97921 21.5H18.1249V18.5H5.97921V21.5ZM18.179 21.499C19.3595 21.4565 20.4674 20.9408 21.2704 20.077L19.0732 18.0344C18.8023 18.3257 18.4415 18.4876 18.0709 18.501L18.179 21.499ZM21.2704 20.077C22.0721 19.2146 22.5086 18.0728 22.4999 16.8963L19.5 16.9184C19.5031 17.3418 19.3453 17.7416 19.0732 18.0344L21.2704 20.077ZM22.4999 16.9074V15.3396H19.4999V16.9074H22.4999ZM5.97921 17.2114C5.93341 17.2114 5.87992 17.1931 5.83318 17.1449L3.67985 19.2337C4.28168 19.8541 5.10781 20.2114 5.97921 20.2114V17.2114ZM5.83318 17.1449C5.78494 17.0952 5.75006 17.0183 5.75006 16.9289H2.75006C2.75006 17.785 3.07954 18.6149 3.67985 19.2337L5.83318 17.1449ZM5.75006 16.9289V6.36242H2.75006V16.9289H5.75006ZM5.75006 6.36242C5.75006 6.46097 5.71251 6.56433 5.63182 6.64752L3.47849 4.5587C3.0071 5.04464 2.75006 5.69427 2.75006 6.36242H5.75006ZM5.63182 6.64752C5.54963 6.73225 5.42825 6.78859 5.29172 6.78859V3.78859C4.60265 3.78859 3.95138 4.0712 3.47849 4.5587L5.63182 6.64752ZM5.29172 6.78859H15.4166V3.78859H5.29172V6.78859ZM15.4166 6.78859C15.2801 6.78859 15.1587 6.73225 15.0765 6.64752L17.2299 4.5587C16.757 4.0712 16.1057 3.78859 15.4166 3.78859V6.78859ZM15.0765 6.64752C14.9958 6.56434 14.9583 6.46098 14.9583 6.36242H17.9583C17.9583 5.69426 17.7012 5.04464 17.2299 4.5587L15.0765 6.64752ZM14.9583 6.37364L15.0208 14.728L18.0207 14.7056L17.9582 6.35119L14.9583 6.37364ZM16.5208 13.2168H8.35419V16.2168H16.5208V13.2168ZM8.35419 13.2168C7.77564 13.2168 7.23035 13.4541 6.83559 13.8611L8.98892 15.9499C8.82858 16.1152 8.60123 16.2168 8.35419 16.2168V13.2168ZM6.83559 13.8611C6.44234 14.2665 6.2292 14.8068 6.2292 15.3611H9.2292C9.2292 15.5735 9.14775 15.7862 8.98892 15.9499L6.83559 13.8611ZM6.2292 15.3611V16.9289H9.2292V15.3611H6.2292ZM6.2292 16.929C6.2292 16.9726 6.22074 17.0148 6.20539 17.0527L8.98583 18.1793C9.14687 17.7818 9.22923 17.3569 9.2292 16.9288L6.2292 16.929ZM6.20539 17.0527C6.19006 17.0906 6.16879 17.1219 6.14501 17.1461L8.28579 19.2478C8.58756 18.9404 8.82476 18.5768 8.98583 18.1793L6.20539 17.0527ZM6.14501 17.1461C6.12131 17.1703 6.09575 17.1868 6.07101 17.1971L7.22365 19.9668C7.62332 19.8005 7.98392 19.5553 8.28579 19.2478L6.14501 17.1461ZM6.07101 17.1971C6.04639 17.2073 6.02167 17.2118 5.99784 17.2115L5.96058 20.2113C6.3944 20.2167 6.82387 20.1332 7.22365 19.9668L6.07101 17.1971ZM18.2499 16.9289C18.2499 17.0183 18.215 17.0952 18.1668 17.1449L20.3201 19.2337C20.9205 18.6149 21.2499 17.785 21.2499 16.9289H18.2499ZM18.1668 17.1449C18.1201 17.1931 18.0666 17.2114 18.0208 17.2114V20.2114C18.8922 20.2114 19.7183 19.8541 20.3201 19.2337L18.1668 17.1449ZM18.0208 17.2114H8.41669V20.2114H18.0208V17.2114ZM9.644 19.5738C10.1872 18.8008 10.4772 17.8765 10.4792 16.9319L7.47919 16.9258C7.4785 17.2619 7.37496 17.5849 7.18938 17.849L9.644 19.5738ZM10.4792 16.9289V15.9839H7.47919V16.9289H10.4792ZM8.97919 17.4839H19.7499V14.4839H8.97919V17.4839ZM18.2499 15.9839V16.9289H21.2499V15.9839H18.2499Z",
                    fill: "currentColor",
                    mask: "url(#path-1-inside-1_292_10857)",
                  }),
                  (0, a.jsx)("mask", {
                    id: "path-3-inside-2_292_10857",
                    fill: "white",
                    children: (0, a.jsx)("path", {
                      d: "M10.2121 7H6.65C6.29101 7 6 7.29101 6 7.65C6 8.00898 6.29101 8.3 6.65 8.3H10.2121C10.5711 8.3 10.8621 8.00898 10.8621 7.65C10.8621 7.29101 10.5711 7 10.2121 7Z",
                    }),
                  }),
                  (0, a.jsx)("path", {
                    d: "M6.65 8.5H10.2121V5.5H6.65V8.5ZM10.2121 6.8H6.65V9.8H10.2121V6.8ZM6.65 6.8C7.11944 6.8 7.5 7.18056 7.5 7.65H4.5C4.5 8.83741 5.46258 9.8 6.65 9.8V6.8ZM9.36207 7.65C9.36207 7.18056 9.74263 6.8 10.2121 6.8V9.8C11.3995 9.8 12.3621 8.83741 12.3621 7.65H9.36207ZM10.2121 8.5C9.74262 8.5 9.36207 8.11944 9.36207 7.65H12.3621C12.3621 6.46259 11.3995 5.5 10.2121 5.5V8.5ZM6.65 5.5C5.46259 5.5 4.5 6.46259 4.5 7.65H7.5C7.5 8.11944 7.11944 8.5 6.65 8.5V5.5Z",
                    fill: "currentColor",
                    mask: "url(#path-3-inside-2_292_10857)",
                  }),
                  (0, a.jsx)("mask", {
                    id: "path-5-inside-3_292_10857",
                    fill: "white",
                    children: (0, a.jsx)("path", {
                      d: "M14.35 9.2998H6.65C6.29101 9.2998 6 9.59082 6 9.9498C6 10.3088 6.29101 10.5998 6.65 10.5998H14.35C14.709 10.5998 15 10.3088 15 9.9498C15 9.59082 14.709 9.2998 14.35 9.2998Z",
                    }),
                  }),
                  (0, a.jsx)("path", {
                    d: "M6.65 10.7998H14.35V7.7998H6.65V10.7998ZM14.35 9.0998H6.65V12.0998H14.35V9.0998ZM6.65 9.0998C7.11944 9.0998 7.5 9.48036 7.5 9.9498H4.5C4.5 11.1372 5.46259 12.0998 6.65 12.0998V9.0998ZM13.5 9.9498C13.5 9.48036 13.8806 9.0998 14.35 9.0998V12.0998C15.5374 12.0998 16.5 11.1372 16.5 9.9498H13.5ZM14.35 10.7998C13.8806 10.7998 13.5 10.4192 13.5 9.9498H16.5C16.5 8.76239 15.5374 7.7998 14.35 7.7998V10.7998ZM6.65 7.7998C5.46259 7.7998 4.5 8.76239 4.5 9.9498H7.5C7.5 10.4192 7.11944 10.7998 6.65 10.7998V7.7998Z",
                    fill: "currentColor",
                    mask: "url(#path-5-inside-3_292_10857)",
                  }),
                  (0, a.jsx)("mask", {
                    id: "path-7-inside-4_292_10857",
                    fill: "white",
                    children: (0, a.jsx)("path", {
                      d: "M14.35 11.5996H6.65C6.29101 11.5996 6 11.8906 6 12.2496C6 12.6086 6.29101 12.8996 6.65 12.8996H14.35C14.709 12.8996 15 12.6086 15 12.2496C15 11.8906 14.709 11.5996 14.35 11.5996Z",
                    }),
                  }),
                  (0, a.jsx)("path", {
                    d: "M6.65 13.0996H14.35V10.0996H6.65V13.0996ZM14.35 11.3996H6.65V14.3996H14.35V11.3996ZM6.65 11.3996C7.11944 11.3996 7.5 11.7802 7.5 12.2496H4.5C4.5 13.437 5.46259 14.3996 6.65 14.3996V11.3996ZM13.5 12.2496C13.5 11.7802 13.8806 11.3996 14.35 11.3996V14.3996C15.5374 14.3996 16.5 13.437 16.5 12.2496H13.5ZM14.35 13.0996C13.8806 13.0996 13.5 12.7191 13.5 12.2496H16.5C16.5 11.0622 15.5374 10.0996 14.35 10.0996V13.0996ZM6.65 10.0996C5.46259 10.0996 4.5 11.0622 4.5 12.2496H7.5C7.5 12.7191 7.11944 13.0996 6.65 13.0996V10.0996Z",
                    fill: "currentColor",
                    mask: "url(#path-7-inside-4_292_10857)",
                  }),
                ],
              }),
            isDesktop: !0,
          },
          {
            id: 3,
            name: "Правила",
            link: "/doc/rules",
            icon: () =>
              (0, a.jsxs)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                name: "icon-partners",
                className: "_icon_pg40i_29",
                children: [
                  (0, a.jsx)("path", {
                    d: "M10.6393 6.86136C10.971 6.54331 10.9204 5.97107 10.4844 5.82571C9.86277 5.61846 9.20219 5.50018 8.51061 5.50018C4.92003 5.50018 1.99902 8.41631 1.99902 12C1.99902 15.5836 4.92003 18.4996 8.51061 18.4996C12.101 18.4996 15.022 15.5834 15.022 11.9998C15.022 10.6351 14.5813 9.38198 13.854 8.339C13.659 8.05938 13.2808 7.97748 12.9926 8.15941C12.6515 8.3746 12.6336 8.83569 12.8567 9.17162C13.3968 9.98509 13.7191 10.9522 13.7191 11.9998C13.7191 14.8681 11.3829 17.2003 8.51061 17.2003C5.63814 17.2003 3.30109 14.8681 3.30109 11.9998C3.30109 9.13271 5.63814 6.80052 8.51061 6.80052C9.01732 6.80052 9.50342 6.88167 9.96517 7.02059C10.202 7.09182 10.4608 7.03248 10.6393 6.86136Z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M22.0007 11.9998C22.0007 8.41613 19.0793 5.5 15.4891 5.5C11.8985 5.5 8.97754 8.41592 8.97754 11.9998C8.97754 13.3679 9.42025 14.6239 10.1509 15.6684C10.3451 15.9462 10.7205 16.0276 11.0048 15.8431C11.3436 15.6233 11.362 15.1597 11.139 14.8231C10.601 14.0107 10.2798 13.0455 10.2798 12C10.2798 9.13274 12.6167 6.80054 15.4891 6.80054C18.3616 6.80054 20.698 9.13274 20.698 12C20.698 14.8681 18.3616 17.2003 15.4891 17.2003C14.9919 17.2003 14.5151 17.1209 14.0612 16.9863C13.8254 16.9163 13.5685 16.9754 13.3905 17.145C13.0556 17.4642 13.107 18.0411 13.5467 18.1851C14.1592 18.3857 14.8092 18.5 15.4891 18.5C19.0793 18.4996 22.0007 15.5835 22.0007 11.9998Z",
                    fill: "currentColor",
                  }),
                ],
              }),
            isDesktop: !0,
          },

          {
            id: 5,
            name: "Контакты",
            link: "/doc/contacts",
            icon: ed,
            isDesktop: !0,
          },
          {
            id: 6,
            name: "AML/KYC",
            link: "/doc/aml-kyc",
            icon: () =>
              (0, a.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                name: "icon-contacts",
                className: "_icon_pg40i_29",
                children: (0, a.jsx)("path", {
                  d: "M10.6347 12.2867C10.3546 12.0213 10.1319 11.7037 9.97996 11.3528C9.82799 11.0019 9.74979 10.6248 9.75 10.2439C9.75 8.67044 11.0622 7.39024 12.675 7.39024C14.2878 7.39024 15.6 8.67044 15.6 10.2439C15.6002 10.6248 15.522 11.0019 15.37 11.3528C15.2181 11.7037 14.9954 12.0213 14.7153 12.2867C16.0455 12.9948 16.95 14.372 16.95 15.9512C16.95 16.1259 16.8789 16.2934 16.7523 16.4169C16.6257 16.5404 16.454 16.6098 16.275 16.6098C16.096 16.6098 15.9243 16.5404 15.7977 16.4169C15.6711 16.2934 15.6 16.1259 15.6 15.9512C15.6 14.3778 14.2878 13.0976 12.675 13.0976C11.8995 13.0985 11.1561 13.3994 10.6078 13.9344C10.0594 14.4694 9.75095 15.1947 9.75 15.9512C9.75 16.1259 9.67888 16.2934 9.5523 16.4169C9.42571 16.5404 9.25402 16.6098 9.075 16.6098C8.89598 16.6098 8.72429 16.5404 8.5977 16.4169C8.47112 16.2934 8.4 16.1259 8.4 15.9512C8.4 14.372 9.3045 12.9948 10.6347 12.2867ZM6.375 12.6585H3.675C3.49598 12.6585 3.32429 12.5892 3.1977 12.4657C3.07112 12.3422 3 12.1747 3 12C3 11.8253 3.07112 11.6578 3.1977 11.5343C3.32429 11.4108 3.49598 11.3415 3.675 11.3415H6.375C6.55402 11.3415 6.72571 11.4108 6.8523 11.5343C6.97888 11.6578 7.05 11.8253 7.05 12C7.05 12.1747 6.97888 12.3422 6.8523 12.4657C6.72571 12.5892 6.55402 12.6585 6.375 12.6585ZM6.375 9.80488H3.675C3.49598 9.80488 3.32429 9.7355 3.1977 9.612C3.07112 9.4885 3 9.321 3 9.14634C3 8.97169 3.07112 8.80419 3.1977 8.68069C3.32429 8.55719 3.49598 8.48781 3.675 8.48781H6.375C6.55402 8.48781 6.72571 8.55719 6.8523 8.68069C6.97888 8.80419 7.05 8.97169 7.05 9.14634C7.05 9.321 6.97888 9.4885 6.8523 9.612C6.72571 9.7355 6.55402 9.80488 6.375 9.80488ZM6.375 15.5122H3.675C3.49598 15.5122 3.32429 15.4428 3.1977 15.3193C3.07112 15.1958 3 15.0283 3 14.8537C3 14.679 3.07112 14.5115 3.1977 14.388C3.32429 14.2645 3.49598 14.1951 3.675 14.1951H6.375C6.55402 14.1951 6.72571 14.2645 6.8523 14.388C6.97888 14.5115 7.05 14.679 7.05 14.8537C7.05 15.0283 6.97888 15.1958 6.8523 15.3193C6.72571 15.4428 6.55402 15.5122 6.375 15.5122ZM18.6015 21H6.7485C6.1126 20.9993 5.50294 20.7525 5.05329 20.3139C4.60364 19.8752 4.35071 19.2804 4.35 18.66V17.0488C4.35 16.8741 4.42112 16.7066 4.5477 16.5831C4.67429 16.4596 4.84598 16.3902 5.025 16.3902C5.20402 16.3902 5.37571 16.4596 5.5023 16.5831C5.62888 16.7066 5.7 16.8741 5.7 17.0488V18.66C5.70024 18.9312 5.81078 19.1913 6.00736 19.3831C6.20394 19.5748 6.47049 19.6827 6.7485 19.6829H18.6015C18.8795 19.6827 19.1461 19.5748 19.3426 19.3831C19.5392 19.1913 19.6498 18.9312 19.65 18.66V5.34C19.6498 5.06877 19.5392 4.80872 19.3426 4.61694C19.1461 4.42515 18.8795 4.31731 18.6015 4.31707H6.7485C6.47049 4.31731 6.20394 4.42515 6.00736 4.61694C5.81078 4.80872 5.70024 5.06877 5.7 5.34V6.95122C5.7 7.12587 5.62888 7.29338 5.5023 7.41688C5.37571 7.54037 5.20402 7.60976 5.025 7.60976C4.84598 7.60976 4.67429 7.54037 4.5477 7.41688C4.42112 7.29338 4.35 7.12587 4.35 6.95122V5.34C4.35071 4.71961 4.60364 4.12482 5.05329 3.68614C5.50294 3.24746 6.1126 3.0007 6.7485 3H18.6015C19.2374 3.0007 19.8471 3.24746 20.2967 3.68614C20.7464 4.12482 20.9993 4.71961 21 5.34V18.66C20.9993 19.2804 20.7464 19.8752 20.2967 20.3139C19.8471 20.7525 19.2374 20.9993 18.6015 21ZM12.675 8.70732C11.8065 8.70732 11.1 9.39659 11.1 10.2439C11.1 11.0912 11.8065 11.7805 12.675 11.7805C13.5435 11.7805 14.25 11.0912 14.25 10.2439C14.25 9.39659 13.5435 8.70732 12.675 8.70732Z",
                  fill: "currentColor",
                }),
              }),
            isDesktop: !0,
          },
        ],
        ex = (e) => {
          let { children: t } = e;
          return (0, a.jsx)(eo, {
            children: (0, a.jsxs)("div", {
              className:
                "min-h-screen h-full w-full bg-background z-10 relative flex flex-col gap-20",
              children: [
                (0, a.jsx)(Y, { navMenu: ec }),
                (0, a.jsx)("main", {
                  className: "flex-1 relative min-h-full flex flex-col",
                  children: t,
                }),
                (0, a.jsx)(W, { navMenu: ec }),
              ],
            }),
          });
        };
    },
    38157: (e, t, s) => {
      s.d(t, { i: () => o });
      var a = s(23576),
        r = s(43415),
        l = s(2818);
      let i = (0, a.w)({
        server: { API_URL: r.z.string().url() },
        client: { NEXT_PUBLIC_API_URL: r.z.string().url() },
        runtimeEnv: {
          API_URL: l.env.API_URL,
          NEXT_PUBLIC_API_URL: window.location.origin + "/exchange",
        },
      });
      var n = s(51747);
      let o = s(82651).A.create({
        withCredentials: !0,
        baseURL: i.NEXT_PUBLIC_API_URL,
      });
      o.interceptors.request.use((e) => {
        let t = n.E.getState().accountData;
        return t && t.token && (e.headers["auth-token"] = t.token), e;
      });
    },
    36021: (e, t, s) => {
      s.d(t, { A: () => l });
      var a = s(38157);
      class r {
        async login(e, t) {
          return a.i.post("/user/auth/login", { email: e, password: t });
        }
        async register(e, t) {
          return a.i.post("/user/auth/registration", { email: e, password: t });
        }
        async orders() {
          return a.i.get("/user/orders/list");
        }
        async logout() {
          return a.i.get("/user/logout");
        }
        async check_session() {
          return a.i.get("/user/check-session");
        }
      }
      let l = new r();
    },
    51747: (e, t, s) => {
      s.d(t, { E: () => l });
      var a = s(99827),
        r = s(60709);
      let l = (0, a.v)(
        (0, r.Zr)(
          (e) => ({
            accountData: { email: "", referral: "", token: "" },
            setAccountData: (t) => e({ accountData: t }),
          }),
          { name: "account" }
        )
      );
    },
  },
]);
