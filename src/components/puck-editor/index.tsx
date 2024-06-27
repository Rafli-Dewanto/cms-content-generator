import { nanoid } from "nanoid";
import type { Config, Data } from "@measured/puck";
import "@measured/puck/puck.css";
import { AccessoriesCard, AccessoriesCardProps } from "@puck-components/accessories-card";
import { AspectRatioBlock, AspectRatioProps } from "@puck-components/aspect-ratio";
import { Banner, BannerProps } from "@puck-components/banner";
import { CaraMembeli, CaraMembeliProps } from "@puck-components/cara-membeli";
import { Columns, ColumnsProps } from "@puck-components/columns";
import { Container, ContainerProps } from "@puck-components/container";
import { Flex, FlexProps } from "@puck-components/flex";
import { Heading as HeadingBlock, HeadingProps } from "@puck-components/heading";
import { Hero, HeroProps } from "@puck-components/hero";
import { ImageBlock, ImageProps } from "@puck-components/image";
import { Installment, InstallmentProps } from "@puck-components/installment";
import { IphoneCard, IphoneCardProps } from "@puck-components/iphone-card";
import { Paragraph, ParagraphProps } from "@puck-components/paragraph";
import { ProductCard, ProductCardProps } from "@puck-components/product-card";
import { PromoBank } from "@puck-components/promo-bank";
import { PromoCard, PromoCardProps } from "@puck-components/promo-card";
import { SectionCard, SectionCardProps } from "@puck-components/section-card";
import { SectionHeading, SectionHeadingProps } from "@puck-components/section-heading";
import { Table, TableProps } from "@puck-components/table";
import { Tnc, TncProps } from "@puck-components/tnc";
import { VerticalSpace, VerticalSpaceProps } from "@puck-components/vertical-space";
import { LinkComponent, LinkProps } from "@puck-components/link";

type Props = {
  CaraMembeli: CaraMembeliProps;
  Installment: InstallmentProps;
  AccessoriesCard: AccessoriesCardProps;
  PromoCard: PromoCardProps;
  Banner: BannerProps;
  VerticalSpace: VerticalSpaceProps;
  SectionHeading: SectionHeadingProps;
  HeadingBlock: HeadingProps;
  Paragraph: ParagraphProps;
  Hero: HeroProps;
  ProductCard: ProductCardProps;
  Container: ContainerProps;
  Columns: ColumnsProps;
  Flex: FlexProps;
  Tnc: TncProps;
  Table: TableProps;
  SectionCard: SectionCardProps;
  PromoBank: object;
  Image: ImageProps;
  AspectRatio: AspectRatioProps;
  IphoneCard: IphoneCardProps;
  Link: LinkProps;
};

export const config: Config<Props> = {
  categories: {
    layout: {
      components: [
        "Container",
        "VerticalSpace",
        "Columns",
        "Flex",
        "Table",
        "Image",
        "AspectRatio",
        "Link",
      ],
    },
    typography: {
      components: ["HeadingBlock", "Paragraph", "SectionHeading"],
    },
    content: {
      components: [
        "Hero",
        "ProductCard",
        "Banner",
        "Installment",
        "AccessoriesCard",
        "PromoCard",
        "CaraMembeli",
        "Tnc",
        "SectionCard",
        "PromoBank",
      ],
    },
  },
  components: {
    Link: LinkComponent,
    IphoneCard,
    AspectRatio: AspectRatioBlock,
    Image: ImageBlock,
    PromoBank,
    SectionCard,
    Table,
    Tnc,
    CaraMembeli,
    Installment,
    AccessoriesCard,
    PromoCard,
    Banner,
    VerticalSpace,
    SectionHeading,
    HeadingBlock,
    Paragraph,
    Hero,
    ProductCard,
    Container,
    Columns,
    Flex,
  },
};
export const initialData: Data = {
  content: [
    {
      type: "SectionHeading",
      props: {
        id: `SectionHeading-${nanoid(10)}`,
        title: "Hello!",
        description:
          "you can start editing your website content here by dragging and dropping the blocks you want to add to the page and edit the content of the blocks by clicking on them.",
      },
    },
  ],
  root: {},
};
