// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijbX9dfpBRbW1FGSgs1NJo
// Component: v2szJmgCG0v

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavBar from "../../NavBar"; // plasmic-import: 38U0KJJ_izLvF0/component

import { useScreenVariants as useScreenVariantsbvEuI4Yp87Tgs } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BV_euI4yp87tgs/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chipsia.module.css"; // plasmic-import: ijbX9dfpBRbW1FGSgs1NJo/projectcss
import sty from "./PlasmicExportProcedures.module.css"; // plasmic-import: v2szJmgCG0v/css

import LogoChipsiasvgIcon from "./icons/PlasmicIcon__LogoChipsiasvg"; // plasmic-import: Nnqp58GAr/icon

createPlasmicElementProxy;

export type PlasmicExportProcedures__VariantMembers = {};
export type PlasmicExportProcedures__VariantsArgs = {};
type VariantPropType = keyof PlasmicExportProcedures__VariantsArgs;
export const PlasmicExportProcedures__VariantProps =
  new Array<VariantPropType>();

export type PlasmicExportProcedures__ArgsType = {};
type ArgPropType = keyof PlasmicExportProcedures__ArgsType;
export const PlasmicExportProcedures__ArgProps = new Array<ArgPropType>();

export type PlasmicExportProcedures__OverridesType = {
  root?: p.Flex<"div">;
  navBar?: p.Flex<typeof NavBar>;
  pageBanner?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  mainSection?: p.Flex<"div">;
  ol?: p.Flex<"ol">;
  footerTop?: p.Flex<"div">;
  container?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  h5?: p.Flex<"h5">;
  footerBottom?: p.Flex<"div">;
  container2?: p.Flex<"div">;
};

export interface DefaultExportProceduresProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicExportProcedures__RenderFunc(props: {
  variants: PlasmicExportProcedures__VariantsArgs;
  args: PlasmicExportProcedures__ArgsType;
  overrides: PlasmicExportProcedures__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbvEuI4Yp87Tgs()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicExportProcedures.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicExportProcedures.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicExportProcedures.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicExportProcedures.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicExportProcedures.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicExportProcedures.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicExportProcedures.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicExportProcedures.pageMetadata.ogImageSrc}
        />
        <link
          ref="canonical"
          href={PlasmicExportProcedures.pageMetadata.canonical}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__sapPe)}>
            <NavBar
              data-plasmic-name={"navBar"}
              data-plasmic-override={overrides.navBar}
              className={classNames("__wab_instance", sty.navBar)}
            />
          </div>
          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Export Procedures"}
            </h1>
          </div>
          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <div className={classNames(projectcss.all, sty.columns__udNtw)}>
              <div className={classNames(projectcss.all, sty.column__a72JR)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__l12P8
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {"Export Procedures for Chipsia\n\n"}
                    </React.Fragment>
                    {
                      <ol
                        data-plasmic-name={"ol"}
                        data-plasmic-override={overrides.ol}
                        className={classNames(
                          projectcss.all,
                          projectcss.ol,
                          sty.ol
                        )}
                      >
                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__znClg
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 700 }}
                            >
                              {"Contact Us:"}
                            </span>
                            <React.Fragment>
                              {
                                " Customers interested in exporting our chips and snacks can contact us by filling out the form on our \u201cPartnership\u201d page, sending an email to info@chipsia.com, or clicking our WhatsApp contact button."
                              }
                            </React.Fragment>
                          </React.Fragment>
                        </li>
                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__z3IbN
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 700 }}
                            >
                              {"Discuss Your Needs"}
                            </span>
                            <React.Fragment>
                              {
                                ": Our representative will discuss the customer\u2019s needs, including the types of products they are interested in, the quantity, and any special requirements. We will also discuss pricing and the export process."
                              }
                            </React.Fragment>
                          </React.Fragment>
                        </li>
                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__enPer
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 700 }}
                            >
                              {"Agreement"}
                            </span>
                            <React.Fragment>
                              {
                                ": Once an agreement has been reached, the customer must send a down payment to confirm the order."
                              }
                            </React.Fragment>
                          </React.Fragment>
                        </li>
                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__a1Jdc
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 700 }}
                            >
                              {"Send Products"}
                            </span>
                            <React.Fragment>
                              {
                                ": After receiving the down payment, Chipsia will prepare and send the products to the customer."
                              }
                            </React.Fragment>
                          </React.Fragment>
                        </li>
                      </ol>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__lIv3)}>
            <div
              data-plasmic-name={"footerTop"}
              data-plasmic-override={overrides.footerTop}
              className={classNames(projectcss.all, sty.footerTop)}
            >
              <div
                data-plasmic-name={"container"}
                data-plasmic-override={overrides.container}
                className={classNames(projectcss.all, sty.container)}
              >
                <div className={classNames(projectcss.all, sty.columns__qXaDy)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column__uD7QH)}
                  >
                    <LogoChipsiasvgIcon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(projectcss.all, sty.svg)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__syqmN
                      )}
                    >
                      {
                        "Chipsia Are Trusted Tempeh Chips, Cassava Chips, Emping Chips and Banana Chips Exporters"
                      }
                    </div>
                  </p.Stack>
                  <div
                    className={classNames(projectcss.all, sty.column__wxsw6)}
                  >
                    <h5
                      data-plasmic-name={"h5"}
                      data-plasmic-override={overrides.h5}
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5
                      )}
                    >
                      {"Menu"}
                    </h5>
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link__fv4Ev
                      )}
                      component={Link}
                      platform={"nextjs"}
                    >
                      {"Privacy Policy"}
                    </p.PlasmicLink>
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link__cPcYc
                      )}
                      component={Link}
                      platform={"nextjs"}
                    >
                      {"Terms of Service"}
                    </p.PlasmicLink>
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link___9Ege4
                      )}
                      component={Link}
                      platform={"nextjs"}
                    >
                      {"Pricing "}
                    </p.PlasmicLink>
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link__y58F
                      )}
                      component={Link}
                      platform={"nextjs"}
                    >
                      {"Contact"}
                    </p.PlasmicLink>
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link___0NqsB
                      )}
                      component={Link}
                      platform={"nextjs"}
                    >
                      {"Blog"}
                    </p.PlasmicLink>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"footerBottom"}
              data-plasmic-override={overrides.footerBottom}
              className={classNames(projectcss.all, sty.footerBottom)}
            >
              <div
                data-plasmic-name={"container2"}
                data-plasmic-override={overrides.container2}
                className={classNames(projectcss.all, sty.container2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__e4Ulg
                  )}
                >
                  {
                    "\u00a9 Chipsia. All rights reserved. This site proudly built by Ade Tias ( Koncoweb )"
                  }
                </div>
              </div>
            </div>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBar",
    "pageBanner",
    "h1",
    "mainSection",
    "ol",
    "footerTop",
    "container",
    "svg",
    "h5",
    "footerBottom",
    "container2"
  ],
  navBar: ["navBar"],
  pageBanner: ["pageBanner", "h1"],
  h1: ["h1"],
  mainSection: ["mainSection", "ol"],
  ol: ["ol"],
  footerTop: ["footerTop", "container", "svg", "h5"],
  container: ["container", "svg", "h5"],
  svg: ["svg"],
  h5: ["h5"],
  footerBottom: ["footerBottom", "container2"],
  container2: ["container2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBar: typeof NavBar;
  pageBanner: "div";
  h1: "h1";
  mainSection: "div";
  ol: "ol";
  footerTop: "div";
  container: "div";
  svg: "svg";
  h5: "h5";
  footerBottom: "div";
  container2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicExportProcedures__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicExportProcedures__VariantsArgs;
    args?: PlasmicExportProcedures__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicExportProcedures__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicExportProcedures__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicExportProcedures__ArgProps,
          internalVariantPropNames: PlasmicExportProcedures__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicExportProcedures__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExportProcedures";
  } else {
    func.displayName = `PlasmicExportProcedures.${nodeName}`;
  }
  return func;
}

export const PlasmicExportProcedures = Object.assign(
  // Top-level PlasmicExportProcedures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    pageBanner: makeNodeComponent("pageBanner"),
    h1: makeNodeComponent("h1"),
    mainSection: makeNodeComponent("mainSection"),
    ol: makeNodeComponent("ol"),
    footerTop: makeNodeComponent("footerTop"),
    container: makeNodeComponent("container"),
    svg: makeNodeComponent("svg"),
    h5: makeNodeComponent("h5"),
    footerBottom: makeNodeComponent("footerBottom"),
    container2: makeNodeComponent("container2"),

    // Metadata about props expected for PlasmicExportProcedures
    internalVariantProps: PlasmicExportProcedures__VariantProps,
    internalArgProps: PlasmicExportProcedures__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Export Procedures for Indonesian Chips",
      description:
        "export procedures for  “Chipsia” Indonesian chips and snacks exporter Chipsia, trusted indonesian tempeh, cassave, emping, banana chips exporter",
      ogImageSrc:
        "https://site-assets.plasmic.app/98107de5f8257ec82dc0c26424ff01cf.jpg",
      canonical: "https://chipsia.com/product/export-procedures"
    }
  }
);

export default PlasmicExportProcedures;
/* prettier-ignore-end */
