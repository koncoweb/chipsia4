// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijbX9dfpBRbW1FGSgs1NJo
// Component: rMjz4Axj4o

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

import { useScreenVariants as useScreenVariantsbvEuI4Yp87Tgs } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BV_euI4yp87tgs/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chipsia.module.css"; // plasmic-import: ijbX9dfpBRbW1FGSgs1NJo/projectcss
import sty from "./PlasmicArtikel.module.css"; // plasmic-import: rMjz4Axj4o/css

createPlasmicElementProxy;

export type PlasmicArtikel__VariantMembers = {};
export type PlasmicArtikel__VariantsArgs = {};
type VariantPropType = keyof PlasmicArtikel__VariantsArgs;
export const PlasmicArtikel__VariantProps = new Array<VariantPropType>();

export type PlasmicArtikel__ArgsType = {};
type ArgPropType = keyof PlasmicArtikel__ArgsType;
export const PlasmicArtikel__ArgProps = new Array<ArgPropType>();

export type PlasmicArtikel__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultArtikelProps {
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

function PlasmicArtikel__RenderFunc(props: {
  variants: PlasmicArtikel__VariantsArgs;
  args: PlasmicArtikel__ArgsType;
  overrides: PlasmicArtikel__OverridesType;
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
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__yPxy)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"100%" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"100%" as const}
            loading={"lazy" as const}
            src={(() => {
              try {
                return $ctx.currentContentfulArtikelItem.fields.gambarUtama
                  .fields.file.url;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
          />

          <div className={classNames(projectcss.all, sty.freeBox__yWxEr)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__czJm
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $ctx.currentContentfulArtikelItem.fields.judul;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "Enter some text";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__sm3SL)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__f2XFs
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $ctx.currentContentfulArtikelItem.fields
                      .deskripsiSeo;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "Enter some text";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.column__qmsN)} />

        <div className={classNames(projectcss.all, sty.column___6PIs)} />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "img"],
  columns: ["columns", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArtikel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArtikel__VariantsArgs;
    args?: PlasmicArtikel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicArtikel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicArtikel__ArgsType,
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
          internalArgPropNames: PlasmicArtikel__ArgProps,
          internalVariantPropNames: PlasmicArtikel__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicArtikel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArtikel";
  } else {
    func.displayName = `PlasmicArtikel.${nodeName}`;
  }
  return func;
}

export const PlasmicArtikel = Object.assign(
  // Top-level PlasmicArtikel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicArtikel
    internalVariantProps: PlasmicArtikel__VariantProps,
    internalArgProps: PlasmicArtikel__ArgProps
  }
);

export default PlasmicArtikel;
/* prettier-ignore-end */
