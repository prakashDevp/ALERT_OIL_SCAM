/*
  # Create subscribers table

  1. New Tables
    - `subscribers`
      - `id` (uuid, primary key) - unique subscriber record ID
      - `user_id` (uuid, references auth.users) - the authenticated user
      - `full_name` (text) - subscriber's full name
      - `email` (text) - subscriber's email address
      - `is_active` (boolean) - whether the subscription is currently active
      - `plan` (text) - subscription plan type (e.g. 'lifetime')
      - `amount_paid` (numeric) - amount paid for subscription
      - `subscribed_at` (timestamptz) - when the subscription started
      - `created_at` (timestamptz) - record creation timestamp

  2. Security
    - Enable RLS on `subscribers` table
    - Authenticated users can only read their own subscription record
    - No insert/update/delete from client — admin only
*/

CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id),
  full_name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  is_active boolean NOT NULL DEFAULT false,
  plan text NOT NULL DEFAULT 'lifetime',
  amount_paid numeric NOT NULL DEFAULT 0,
  subscribed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Subscribers can read own subscription"
  ON subscribers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
