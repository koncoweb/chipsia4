// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijbX9dfpBRbW1FGSgs1NJo
// Component: YZDDbkZzE-

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
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent

import { useScreenVariants as useScreenVariantsbvEuI4Yp87Tgs } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BV_euI4yp87tgs/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chipsia.module.css"; // plasmic-import: ijbX9dfpBRbW1FGSgs1NJo/projectcss
import sty from "./PlasmicPartnership.module.css"; // plasmic-import: YZDDbkZzE-/css

import LogoChipsiasvgIcon from "./icons/PlasmicIcon__LogoChipsiasvg"; // plasmic-import: Nnqp58GAr/icon

createPlasmicElementProxy;

export type PlasmicPartnership__VariantMembers = {};
export type PlasmicPartnership__VariantsArgs = {};
type VariantPropType = keyof PlasmicPartnership__VariantsArgs;
export const PlasmicPartnership__VariantProps = new Array<VariantPropType>();

export type PlasmicPartnership__ArgsType = {};
type ArgPropType = keyof PlasmicPartnership__ArgsType;
export const PlasmicPartnership__ArgProps = new Array<ArgPropType>();

export type PlasmicPartnership__OverridesType = {
  root?: p.Flex<"div">;
  navBar?: p.Flex<typeof NavBar>;
  pageBanner?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  img?: p.Flex<typeof p.PlasmicImg>;
  mainSection?: p.Flex<"div">;
  embedHtml?: p.Flex<typeof Embed>;
  footerTop?: p.Flex<"div">;
  container?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  h5?: p.Flex<"h5">;
  footerBottom?: p.Flex<"div">;
  container2?: p.Flex<"div">;
};

export interface DefaultPartnershipProps {}

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

function PlasmicPartnership__RenderFunc(props: {
  variants: PlasmicPartnership__VariantsArgs;
  args: PlasmicPartnership__ArgsType;
  overrides: PlasmicPartnership__OverridesType;
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
        <title key="title">{PlasmicPartnership.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPartnership.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPartnership.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicPartnership.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicPartnership.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicPartnership.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicPartnership.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicPartnership.pageMetadata.ogImageSrc}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

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
        <div className={classNames(projectcss.all, sty.freeBox___0Zs2A)}>
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__ulvCj)} />
        </div>
        <div
          data-plasmic-name={"pageBanner"}
          data-plasmic-override={overrides.pageBanner}
          className={classNames(projectcss.all, sty.pageBanner)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__tdLwu)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns___4HWsn)}
            >
              <div className={classNames(projectcss.all, sty.column__vcXuH)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__dm1Th)}
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
                    {"Contact Us"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ltBsW
                    )}
                  >
                    {
                      "By becoming our importer, you can source high-quality chips from different countries around the world, including Indonesia, where traditional chips are a popular snack. By importing these unique and exotic chips, you can offer your customers a wide variety of flavors and textures that they might not be able to find elsewhere.\n\nTo start your own exotic chips import business, you'll need to contact us as potential suppliers. It's important to find reliable suppliers who can provide you with high-quality chips at a reasonable price. You'll find Chipsia can be Reliable Exotic Chips Business Partners"
                    }
                  </div>
                </p.Stack>
              </div>
              <div className={classNames(projectcss.all, sty.column__fOs0N)}>
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? ("100%" as const)
                      : ("100%" as const)
                  }
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? ("lazy" as const)
                      : ("lazy" as const)
                  }
                  src={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? {
                          src: "/plasmic/chipsia/images/image7.jpg",
                          fullWidth: 1920,
                          fullHeight: 1280,
                          aspectRatio: undefined
                        }
                      : {
                          src: "/plasmic/chipsia/images/empingTraditionalMakingProcessjpg.jpg",
                          fullWidth: 1024,
                          fullHeight: 768,
                          aspectRatio: undefined
                        }
                  }
                />
              </div>
            </p.Stack>
          </div>
        </div>
        <div
          data-plasmic-name={"mainSection"}
          data-plasmic-override={overrides.mainSection}
          className={classNames(projectcss.all, sty.mainSection)}
        >
          <div className={classNames(projectcss.all, sty.columns__hjk9O)}>
            <div className={classNames(projectcss.all, sty.column__g2LPn)}>
              <Embed
                data-plasmic-name={"embedHtml"}
                data-plasmic-override={overrides.embedHtml}
                className={classNames("__wab_instance", sty.embedHtml)}
                code={
                  '<iframe class="airtable-embed" src="https://airtable.com/embed/shrVzdPoxEugEUsMF?backgroundColor=yellow" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>' as const
                }
              />
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__yzZfC)}>
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
              <div className={classNames(projectcss.all, sty.columns__gOZtY)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__yBlxN)}
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
                      sty.text__to8E
                    )}
                  >
                    {
                      "Chipsia Are Trusted Tempeh Chips, Cassava Chips, Emping Chips and Banana Chips Exporters"
                    }
                  </div>
                </p.Stack>
                <div className={classNames(projectcss.all, sty.column__zrXdy)}>
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
                      sty.link__m026G
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
                      sty.link___3XAdg
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
                      sty.link__y9Tgw
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
                      sty.link__hQsyf
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
                      sty.link___11Z9U
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
                  sty.text__nrcN0
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
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBar",
    "pageBanner",
    "h1",
    "img",
    "mainSection",
    "embedHtml",
    "footerTop",
    "container",
    "svg",
    "h5",
    "footerBottom",
    "container2"
  ],
  navBar: ["navBar"],
  pageBanner: ["pageBanner", "h1", "img"],
  h1: ["h1"],
  img: ["img"],
  mainSection: ["mainSection", "embedHtml"],
  embedHtml: ["embedHtml"],
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
  img: typeof p.PlasmicImg;
  mainSection: "div";
  embedHtml: typeof Embed;
  footerTop: "div";
  container: "div";
  svg: "svg";
  h5: "h5";
  footerBottom: "div";
  container2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPartnership__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPartnership__VariantsArgs;
    args?: PlasmicPartnership__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPartnership__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPartnership__ArgsType,
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
          internalArgPropNames: PlasmicPartnership__ArgProps,
          internalVariantPropNames: PlasmicPartnership__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPartnership__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPartnership";
  } else {
    func.displayName = `PlasmicPartnership.${nodeName}`;
  }
  return func;
}

export const PlasmicPartnership = Object.assign(
  // Top-level PlasmicPartnership renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    pageBanner: makeNodeComponent("pageBanner"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    mainSection: makeNodeComponent("mainSection"),
    embedHtml: makeNodeComponent("embedHtml"),
    footerTop: makeNodeComponent("footerTop"),
    container: makeNodeComponent("container"),
    svg: makeNodeComponent("svg"),
    h5: makeNodeComponent("h5"),
    footerBottom: makeNodeComponent("footerBottom"),
    container2: makeNodeComponent("container2"),

    // Metadata about props expected for PlasmicPartnership
    internalVariantProps: PlasmicPartnership__VariantProps,
    internalArgProps: PlasmicPartnership__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Become Partner To Import Exotic Chips",
      description:
        "Fill form in this Page to get Opportunity to become Profitable Partner of Chipsia, trusted indonesian tempeh, cassave, emping, banana chips exporter",
      ogImageSrc:
        "https://site-assets.plasmic.app/d6301090265d7fbd821d6779389e2cfa.jpg",
      canonical: ""
    }
  }
);

export default PlasmicPartnership;
/* prettier-ignore-end */
