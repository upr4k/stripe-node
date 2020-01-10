declare module 'stripe' {
  namespace Stripe {
    /**
     * The CreditNote object.
     */
    interface CreditNote {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'credit_note';

      /**
       * The integer amount in **%s** representing the total amount of the credit note, including tax.
       */
      amount: number;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * ID of the customer.
       */
      customer: string | Stripe.Customer;

      /**
       * Customer balance transaction related to this credit note.
       */
      customer_balance_transaction:
        | string
        | Stripe.CustomerBalanceTransaction
        | null;

      /**
       * ID of the invoice.
       */
      invoice: string | Stripe.Invoice;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Customer-facing text that appears on the credit note PDF.
       */
      memo: string | null;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata;

      /**
       * A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice.
       */
      number: string;

      /**
       * The link to download the PDF of the credit note.
       */
      pdf: string;

      /**
       * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
       */
      reason: CreditNote.Reason | null;

      /**
       * Refund related to this credit note.
       */
      refund: string | Stripe.Refund | null;

      /**
       * Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
       */
      status: CreditNote.Status;

      /**
       * Type of this credit note, one of `post_payment` or `pre_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
       */
      type: CreditNote.Type;

      /**
       * The time that the credit note was voided.
       */
      voided_at: number | null;
    }

    namespace CreditNote {
      type Reason =
        | 'duplicate'
        | 'fraudulent'
        | 'order_change'
        | 'product_unsatisfactory';

      type Status = 'issued' | 'void';

      type Type = 'post_payment' | 'pre_payment';
    }

    interface CreditNoteCreateParams {
      /**
       * ID of the invoice.
       */
      invoice: string;

      /**
       * The integer amount in **%s** representing the total amount of the credit note.
       */
      amount?: number;

      /**
       * The integer amount in **%s** representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
       */
      credit_amount?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The credit note's memo appears on the credit note PDF.
       */
      memo?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * The integer amount in **%s** representing the amount that is credited outside of Stripe.
       */
      out_of_band_amount?: number;

      /**
       * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
       */
      reason?: CreditNoteCreateParams.Reason;

      /**
       * ID of an existing refund to link this credit note to.
       */
      refund?: string;

      /**
       * The integer amount in **%s** representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
       */
      refund_amount?: number;
    }

    namespace CreditNoteCreateParams {
      type Reason =
        | 'duplicate'
        | 'fraudulent'
        | 'order_change'
        | 'product_unsatisfactory';
    }

    interface CreditNoteRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CreditNoteUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Credit note memo.
       */
      memo?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;
    }

    interface CreditNoteListParams extends PaginationParams {
      /**
       * Only return credit notes for the customer specified by this customer ID.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return credit notes for the invoice specified by this invoice ID.
       */
      invoice?: string;
    }

    interface CreditNotePreviewParams {
      /**
       * ID of the invoice.
       */
      invoice: string;

      /**
       * The integer amount in **%s** representing the total amount of the credit note.
       */
      amount?: number;

      /**
       * The integer amount in **%s** representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
       */
      credit_amount?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The credit note's memo appears on the credit note PDF.
       */
      memo?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * The integer amount in **%s** representing the amount that is credited outside of Stripe.
       */
      out_of_band_amount?: number;

      /**
       * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
       */
      reason?: CreditNotePreviewParams.Reason;

      /**
       * ID of an existing refund to link this credit note to.
       */
      refund?: string;

      /**
       * The integer amount in **%s** representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
       */
      refund_amount?: number;
    }

    namespace CreditNotePreviewParams {
      type Reason =
        | 'duplicate'
        | 'fraudulent'
        | 'order_change'
        | 'product_unsatisfactory';
    }

    interface CreditNoteVoidCreditNoteParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class CreditNotesResource {
      /**
       * Issue a credit note to adjust the amount of a finalized invoice. For a status=open invoice, a credit note reduces
       * its amount_due. For a status=paid invoice, a credit note does not affect its amount_due. Instead, it can result
       * in any combination of the following:
       *
       *
       *  Refund: create a new refund (using refund_amount) or link an existing refund (using refund).
       *  Customer balance credit: credit the customer's balance (using credit_amount) which will be automatically applied to their next invoice when it's finalized.
       *  Outside of Stripe credit: record the amount that is or will be credited outside of Stripe (using out_of_band_amount).
       *
       *
       * For post-payment credit notes the sum of the refund, credit and outside of Stripe amounts must equal the credit note total.
       *
       * You may issue multiple credit notes for an invoice. Each credit note will increment the invoice's pre_payment_credit_notes_amount
       * or post_payment_credit_notes_amount depending on its status at the time of credit note creation.
       */
      create(
        params: CreditNoteCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.CreditNote>;

      /**
       * Retrieves the credit note object with the given identifier.
       */
      retrieve(
        id: string,
        params?: CreditNoteRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.CreditNote>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.CreditNote>;

      /**
       * Updates an existing credit note.
       */
      update(
        id: string,
        params?: CreditNoteUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.CreditNote>;

      /**
       * Returns a list of credit notes.
       */
      list(
        params?: CreditNoteListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.CreditNote>;
      list(options?: RequestOptions): ApiListPromise<Stripe.CreditNote>;

      /**
       * Get a preview of a credit note without creating it.
       */
      preview(
        params: CreditNotePreviewParams,
        options?: RequestOptions
      ): Promise<Stripe.CreditNote>;

      /**
       * Marks a credit note as void. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
       */
      voidCreditNote(
        id: string,
        params?: CreditNoteVoidCreditNoteParams,
        options?: RequestOptions
      ): Promise<Stripe.CreditNote>;
      voidCreditNote(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.CreditNote>;
    }
  }
}
