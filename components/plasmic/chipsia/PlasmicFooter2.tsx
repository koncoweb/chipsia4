// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijbX9dfpBRbW1FGSgs1NJo
// Component: mjWkbfcaecO

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chipsia.module.css"; // plasmic-import: ijbX9dfpBRbW1FGSgs1NJo/projectcss
import sty from "./PlasmicFooter2.module.css"; // plasmic-import: mjWkbfcaecO/css

import LogoChipsiasvgIcon from "./icons/PlasmicIcon__LogoChipsiasvg"; // plasmic-import: Nnqp58GAr/icon

createPlasmicElementProxy;

export type PlasmicFooter2__VariantMembers = {};
export type PlasmicFooter2__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter2__VariantsArgs;
export const PlasmicFooter2__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter2__ArgsType = {};
type ArgPropType = keyof PlasmicFooter2__ArgsType;
export const PlasmicFooter2__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter2__OverridesType = {
  root?: p.Flex<"div">;
  footerTop?: p.Flex<"div">;
  container?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  h5?: p.Flex<"h5">;
  footerBottom?: p.Flex<"div">;
  container2?: p.Flex<"div">;
};

export interface DefaultFooter2Props {
  className?: string;
}

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

function PlasmicFooter2__RenderFunc(props: {
  variants: PlasmicFooter2__VariantsArgs;
  args: PlasmicFooter2__ArgsType;
  overrides: PlasmicFooter2__OverridesType;
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

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
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
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column___4PsSs)}
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
                  sty.text___0HvH8
                )}
              >
                {
                  "Chipsia Are Trusted Tempeh Chips, Cassava Chips, Emping Chips and Banana Chips Exporters"
                }
              </div>
            </p.Stack>
            <div className={classNames(projectcss.all, sty.column__xIGlm)}>
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
                  sty.link__xZEr
                )}
                component={Link}
                href={`/product`}
                platform={"nextjs"}
              >
                {"Products"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___7S3Pz
                )}
                component={Link}
                href={`/partnership`}
                platform={"nextjs"}
              >
                {"Partnership & Contact"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___9UcF
                )}
                component={Link}
                href={`/product/export-procedures`}
                platform={"nextjs"}
              >
                {"Export Procedures"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__kQfMk
                )}
                component={Link}
                href={`/articles`}
                platform={"nextjs"}
              >
                {"Blog"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__wv6U
                )}
                component={Link}
                href={`/privacy-policy`}
                platform={"nextjs"}
              >
                {"Privacy Policy"}
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
              sty.text__jq8K7
            )}
          >
            <React.Fragment>
              <React.Fragment>
                {
                  "\u00a9 Chipsia. All rights reserved. This site proudly built by Ade Tias ( "
                }
              </React.Fragment>
              {
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link___8YKm
                  )}
                  component={Link}
                  href={"https://koncoweb.my.id" as const}
                  platform={"nextjs"}
                >
                  {"Koncoweb"}
                </p.PlasmicLink>
              }
              <React.Fragment>{" )"}</React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "footerTop",
    "container",
    "columns",
    "svg",
    "h5",
    "footerBottom",
    "container2"
  ],
  footerTop: ["footerTop", "container", "columns", "svg", "h5"],
  container: ["container", "columns", "svg", "h5"],
  columns: ["columns", "svg", "h5"],
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
  footerTop: "div";
  container: "div";
  columns: "div";
  svg: "svg";
  h5: "h5";
  footerBottom: "div";
  container2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter2__VariantsArgs;
    args?: PlasmicFooter2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter2__ArgsType,
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
          internalArgPropNames: PlasmicFooter2__ArgProps,
          internalVariantPropNames: PlasmicFooter2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter2";
  } else {
    func.displayName = `PlasmicFooter2.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter2 = Object.assign(
  // Top-level PlasmicFooter2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    footerTop: makeNodeComponent("footerTop"),
    container: makeNodeComponent("container"),
    columns: makeNodeComponent("columns"),
    svg: makeNodeComponent("svg"),
    h5: makeNodeComponent("h5"),
    footerBottom: makeNodeComponent("footerBottom"),
    container2: makeNodeComponent("container2"),

    // Metadata about props expected for PlasmicFooter2
    internalVariantProps: PlasmicFooter2__VariantProps,
    internalArgProps: PlasmicFooter2__ArgProps
  }
);

export default PlasmicFooter2;
/* prettier-ignore-end */
